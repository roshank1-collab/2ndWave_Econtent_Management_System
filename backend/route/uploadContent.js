const express = require("express");
const router = express.Router();
const UploadContent = require('../model/Uploadcontent');
const uploadvideo = require('../middleware/uploadvideo')
const ContentBought = require('../model/ContentBought');
const Users = require('../model/user');
const E_Register_User = require('../model/Ewallet/E_Register_User')
const bcryptjs = require('bcryptjs')
const authentication = require('../middleware/authentication'); //token

const HistoryOfPurchase = require('../model/HistoryOfPurchase/HistoryOfPurchase')



//inserting content
router.post('/content/insert/:id', uploadvideo, function (req, res) {
    console.log(req.body);
    console.log(req.files['video']);

    if (req.files == undefined) {
        return res.tatus(400).json({ message: "Invalid file format" })
    }
    const id = req.params.id;
    E_Register_User.findOne({userid : id})
        .then(function (data) {
            console.log("data")
            console.log(data)           

            if (data == null) {
                res.status(201).json({ message: "You need to have Ewallet first." })
            }
            else {
                const heading = req.body.title;
                const video = req.files['video'][0].filename;
                const ppt = req.files['ppt'][0].filename;
                const content_description = req.body.description;
                const categories = req.body.categories;
                const price = req.body.Price;
                const me = new UploadContent({
                    heading: heading, video: video, content_description: content_description,
                    categories: categories, price: price, userid: id, ppt: ppt
                })
                me.save().then(function (result) {
                    res.status(201).json({ message: "Conent has been added successfully !!!" });

                }).catch(function (err) {
                    console.log(err)
                    res.status(500).json({ message: err })
                })
            }
        })
        .catch(function (err) {
            res.status(500).json({ message: err })
        })



})

//CONTENT DELETE
router.delete('/content/delete/:id', function (req, res) {
    const id = req.params.id;
    UploadContent.deleteOne({ _id: id })
        .then(function (result) {
            res.status(200).json({ message: "Content has been deleted successfully !!!", status: "true" })
        })
        .catch(function (err) {
            res.status(500).json({ message: err, status: "false" })
        })
})



//gets all info
router.get('/content/all', function (req, res) {
    UploadContent.find().then(function (data) {
        console.log(data)
        res.status(200).json({
            ContentData: data
        })
    }).catch(function (e) {
        res.status(500).json(e)
    })
})


//get content of single user
router.get('/content/single/:id', function (req, res) {
    const id = req.params.id;
    UploadContent.find({ userid: id }).then(function (data) {
        if (data == "") {
            res.status(200).json({status: false,  })
            // res.status(200).json({ message: [] })
        }
        else {
            res.status(200).json({ status: true, data })
            console.log(data)
        }
    }).catch(function (err) {
        res.status(500).json({ message: err })
    })
})


// to fetch the catagoris of the content
router.get('/content/catagories', function (req, res) {
    UploadContent.find().distinct('categories').then(function (result) {
        res.status(200).json({ status: true, catagories: result })
    }).catch(function (err) {
        res.status(500).json({ message: err })
    })
})


// to fetch filtred catagores content 
router.get('/content/catagories/:catagories', function (req, res) {
    UploadContent.find({ categories: req.params.catagories }).then(function (result) {
        res.status(200).json({ status: true, catagories: result })
    }).catch(function (err) {
        res.status(500).json({ message: err })
    })
})


//get info of single content
router.get('/content/singleInfodata/:id', function (req, res) {
    const itemid = req.params.id
    UploadContent.findOne({ _id: itemid })
        .then(function (aadata) {
            console.log(aadata)
            res.status(200).json({ status: true, message: "Info Got", data: aadata })
        })
        .catch(function (err) {
            res.status(500).json({ status: false, message: err })
        })
})

// buy content route
router.post('/content/bought/:id', authentication.verifyUser, function (req, res) {
    const contentid = req.params.id;
    const boughtby_userid = req.userData._id
    const boughtby_email = req.userData.Email
    const password = req.body.password

    Users.findOne({ _id: boughtby_userid })
        .then(function (ddaattaa) {
            bcryptjs.compare(password, ddaattaa.Password, function (err, result) {
                if (result == true) {
                    E_Register_User.find()
                        .then(function (edata) {
                            var eid = edata.filter(function (ele) {
                                return ele.userid == boughtby_userid
                            })
                            if (eid.length < 1) {
                                res.status(201).json({ status: "Invalid", message: "You need to have E-Wallet first" })
                            }
                            else {
                                UploadContent.find({ _id: contentid })
                                    .then(function (data) {
                                        // console.log(data)
                                        // console.log(boughtby_email)
                                        // console.log(boughtby_khaltiid)
                                        const productowner_id = data[0].userid
                                        // console.log(productowner_id)
                                        Users.find({ _id: productowner_id })
                                            .then(function (dataa) {
                                                // console.log(dataa)
                                                const productowner_email = dataa[0].Email
                                                // const productowner_khaltiid = dataa[0].Phone_number
                                                // console.log(productowner_email)
                                                // console.log(productowner_khaltiid)

                                                ContentBought.find().then(function (dataaa) {
                                                    // console.log("all data of contentbought")
                                                    // console.log(dataaa)
                                                    var filteredarray = dataaa.filter(function (ele) {
                                                        return ele.boughtby_email == boughtby_email && ele.productowner_email == productowner_email && ele.contentid == contentid
                                                    })
                                                    // console.log("filteredarray")
                                                    // console.log(filteredarray)

                                                    if (filteredarray.length < 1) {
                                                        var today = new Date();
                                                        var boughtdate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
                                                        const boughtdatainfo = new ContentBought({
                                                            contentid: contentid, boughtby_email: boughtby_email,
                                                            boughtby_ID: boughtby_userid, productowner_email: productowner_email, productowner_ID: productowner_id, boughton_date: boughtdate
                                                        })
                                                        boughtdatainfo.save()
                                                            .then(function (result) {
                                                                res.status(201).json({ status: true, boughtStatus: "Successfully Bought" })
                                                            })
                                                            .catch(function (err) {
                                                                res.status(501).json({ message: err })
                                                            })

                                                    }
                                                    else {
                                                        res.status(201).json({ boughtStatus: "You have already bought this content" })
                                                        // console.log("User have already Subscribed")
                                                    }
                                                }).catch(function (err) {
                                                    res.status(500).json({ message: err })
                                                })
                                            })
                                            .catch(function (err) {
                                                res.status(500).json({ message: err })
                                            })
                                    })
                                    .catch(function (err) {
                                        res.status(500).json({ message: err })
                                    })
                            }
                        })
                        .catch(function (err) {
                            res.status(500).json({ message: err })
                        })
                }

                else {
                    return res.status(201).json({ success: false, message: "Password doesn't match !!! Please try again" })
                }


            })
        })
        .catch(function (err) {
            res.status(500).json({ status: "failed", message: err })
        })


})

//filtering bought content of a user
router.get('/content/seeboughtcontent/:id', function (req, res) {
    const userid = req.params.id
    ContentBought.find({ boughtby_ID: userid }).distinct('contentid')
        .then(function (result) {
            console.log(result)
            res.status(200).json({ status: true, data: result })
            var contentidharu = result
            // contentidharu.add(result)
            console.log("contentidharu")
            console.log(contentidharu)

            var storeBoughtcontentAll = []
            contentidharu.map((item) => {
                UploadContent.find({ _id: item }).
                    then(function (out) {
                        console.log("out")
                        console.log(out)
                        var outt = out[1]
                        storeBoughtcontentAll.push(outt)
                    })
            })
            console.log("storeBoughtcontentAll")
            console.log(storeBoughtcontentAll)







        })
        .catch(function (err) {
            res.status(500).json({ message: err })
        })



})
router.get('/content/all', function (req, res) {
    UploadContent.find().then(function (data) {
        res.status(200).json({
            ContentData: data
        })
    }).catch(function (e) {
        res.status(500).json(e)
    })
})
module.exports = router