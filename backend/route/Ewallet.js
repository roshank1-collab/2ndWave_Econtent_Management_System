const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload') //file upload or picture
const { check, validationResult } = require('express-validator')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken');
const authentication = require('../middleware/authentication');

const E_Register_User = require('../model/Ewallet/E_Register_User')
const HistoryOfPurchase = require('../model/HistoryOfPurchase/HistoryOfPurchase')
const ContentBought = require('../model/ContentBought');
const UploadContent = require('../model/Uploadcontent');
const Users = require('../model/user');

router.post('/Ewallet/user-register',
    [
        // check('FullName', "Full Name  is required !!").not().isEmpty(),
        // check('Address', "Address is required").not().isEmpty(),
        // check('PhoneNumber', "Phone Number is required").not().isEmpty(),
        // check('Sex', "Gender is required").not().isEmpty(),
        // check('Email', "Email is required").not().isEmpty(),
        // check('Balance', "Balance is required").not().isEmpty(),
        check('Password', "Password is required").not().isEmpty(),
        check('MPin', "MPin is required").not().isEmpty()
    ],
    authentication.verifyUser, function (req, res) {
        const errors = validationResult(req);
        const First_name = req.userData.First_name;
        const Last_name = req.userData.Last_name;
        const FullName = First_name + " " + Last_name;
        const Address = req.userData.address;
        const PhoneNumber = req.userData.Phone_number;
        const Sex = req.userData.gender;
        const Email = req.userData.Email;
        const Password = req.userData.Password;
        const Balance = req.body.Balance;
        const MPin = req.body.MPin;
        const USERID = req.userData._id

        E_Register_User.find()
            .then(function (data) {

                var alreadyuser = data.filter(function (ele) {
                    return ele.userid == USERID
                })

                // console.log("alreadyuser")
                // console.log(alreadyuser)

                if (alreadyuser.length == 0) {
                    bcryptjs.hash(req.userData.Password, 10, function (err, hash) {
                        const EUser = new E_Register_User({
                            // FullName: req.body.FullName,
                            // Address: req.body.Address,
                            // PhoneNumber: req.body.PhoneNumber,
                            // Sex: req.body.Sex,
                            // Email: req.body.Email,
                            // Balance: req.body.Balance,
                            // Password: hash,
                            // MPin: req.body.MPin,
                            // userid: USERID

                            FullName: FullName,
                            Address: Address,
                            PhoneNumber: parseInt(PhoneNumber),
                            Sex: Sex,
                            Email: Email,
                            Balance: req.body.Balance,
                            Password: hash,
                            MPin: req.body.MPin,
                            userid: USERID
                        });
                        EUser.save().then(
                            function (result) {
                                res.status(201).json({ status: true, message: "E-User Registered!!" })
                            }
                        ).catch(
                            function (err) {
                                res.status(201).json({ status: "Some information are been already in use by another user", message: err })
                            })
                    })

                }
                else if (alreadyuser.length >= 1) {
                    res.status(201).json({ message: "User already exists" })
                }

            })
            .catch(function (err) {
                res.status(500).json({ message: err })
            })
    })

router.post('/wallet/:contentid', authentication.verifyUser, function (req, res) {
    const contentID = req.params.contentid
    const loggedinUserID = req.userData._id
    const password = req.body.password
    const loggedinUserEmail = req.userData.Email
    var contentUserid = "" //UploadContent bata data nikalne ,,,jasko content usko user id
    var contentUserEmail = "" //UploadContent bata data nikalne ,,,jasko content usko email
    var priceOfContent = "" //UploadContent bata data nikalne
    var balanceOfReceiver = "" //E_Register_User bata data nikalne
    var balanceOfSender = "" //E_Register_User bata data nikalne 
    var senderuserid = "" //E_Register_User bata data nikalne 
    var receiveruserid = "" //E_Register_User bata data nikalne 

    Users.findOne({ _id: loggedinUserID })
        .then(function (uudata) {
            // console.log(uudata)
            bcryptjs.compare(password, uudata.Password, function (err, result) {
                // console.log("result")
                // console.log(result)
                if (result == true) {
                    E_Register_User.find()
                        .then(function (edata) {
                            var eid = edata.filter(function (ele) {
                                return ele.userid == loggedinUserID
                            })

                            // console.log("eid")
                            // console.log(eid)

                            // UploadContent.findOne({ _id: contentID })
                            //     .then(function (hyaa) {
                            //         contentUserid = hyaa.userid
                            //         var eidd = edata.filter(function (ele) {
                            //             return ele.userid == contentUserid
                            //         })
                            //         console.log("eidd")
                            //         console.log(eidd)
                            //     })
                            //     .catch(function (err) {
                            //         res.status(500).json({ message: err })
                            //     })

                            if (eid.length == 0) {
                                res.status(201).json({ status: "Invalid", message: "You need to have E-Wallet first" })
                            }
                            // else if (eidd.length < 1) {
                            //     res.status(201).json({ status: "Invalid", message: "The content user has not wallet yet. Please wait for sometime." })
                            // }
                            else {
                                UploadContent.findOne({ _id: contentID })
                                    .then(function (data) {
                                        priceOfContent = data.price
                                        console.log("priceOfContent")
                                        console.log(priceOfContent)

                                        contentUserid = data.userid //jasko content usko user id
                                        console.log("contentUserid")
                                        console.log(contentUserid)

                                        Users.find({ _id: contentUserid })
                                            .then(function (uuddaattaa) {
                                                contentUserEmail = uuddaattaa[0].Email
                                                // console.log("contentUserEmail")
                                                // console.log(contentUserEmail)
                                            })
                                            .catch(function (err) {
                                                res.status(500).json({ message: err })
                                            })

                                        HistoryOfPurchase.find()
                                            .then(function (boughtdata) {
                                                var filterboughtdata = boughtdata.filter(function (ele) {
                                                    return ele.boughtByUserID == loggedinUserID && ele.ProductOwnerUserID == contentUserid && ele.ContentID == contentID
                                                })

                                                if (filterboughtdata.length < 1) {

                                                    // var today = new Date();
                                                    // var boughtdate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
                                                    // const boughtdatainfo = new HistoryOfPurchase({
                                                    //     boughtByUserID: loggedinUserID, boughtByUserEmail: loggedinUserEmail, ProductOwnerUserID: contentUserid, ProductOwnerEmail: contentUserEmail, ContentID: contentID, BoughtOn_Date: boughtondate, ContentPrice: priceOfContent
                                                    // })
                                                    // boughtdatainfo.save()
                                                    //     .then(function (result) {
                                                    //         res.status(201).json({ status: true, boughtStatus: "Successfully Bought" })
                                                    //     })
                                                    //     .catch(function (err) {
                                                    //         res.status(501).json({ message: err })
                                                    //     })

                                                    E_Register_User.find()
                                                        .then(function (userdata) {
                                                            // console.log(userdata)
                                                            //  getting balance of receiver                    
                                                            var filterReceiver = userdata.filter(function (ele) {
                                                                return ele.userid == contentUserid
                                                            })

                                                            receiveruserid = filterReceiver[0].userid
                                                            console.log("receiveruserid")
                                                            console.log(receiveruserid)
                                                            // if (filterReceiver == null) {
                                                            //     res.status(201).json({message : "This user has no wallet created."})
                                                            // }

                                                            balanceOfReceiver = filterReceiver[0].Balance //content jasko tyo manxe ko balance
                                                            console.log("Reciever Balance")
                                                            console.log(balanceOfReceiver)
                                                            //  getting balance of receiver

                                                            //  getting balance of sender
                                                            var filterSender = userdata.filter(function (ele) {
                                                                return ele.userid == loggedinUserID
                                                            })

                                                            senderuserid = filterSender[0].userid
                                                            console.log("senderuserid")
                                                            console.log(senderuserid)

                                                            balanceOfSender = filterSender[0].Balance //logged in user ,, buyer ,, content kinne manxe
                                                            console.log("Sender Balance")
                                                            console.log(balanceOfSender)
                                                            //  getting balance of sender

                                                            if (receiveruserid == null) {
                                                                res.status(201).json({ message: "The Seller of this content has not wallet. So, wait for sometime" })
                                                            }
                                                            else if (balanceOfSender < 1 || balanceOfSender < priceOfContent) {
                                                                res.status(201).json({ status: "Insufficient Balance", message: "Insufficient Balance. Load Amount to your wallet first" })
                                                            }
                                                            else if (senderuserid == contentUserid) {
                                                                res.status(201).json({ message: "This is your own content. You do not want to buy" })
                                                            }
                                                            else {
                                                                var receiverBalanceBecome = balanceOfReceiver + priceOfContent
                                                                var senderBalanceBecome = balanceOfSender - priceOfContent

                                                                console.log("receiver Balance Become")
                                                                console.log(receiverBalanceBecome)

                                                                console.log("sender Balance Become")
                                                                console.log(senderBalanceBecome)

                                                                E_Register_User.updateOne({ userid: contentUserid }, {
                                                                    Balance: receiverBalanceBecome
                                                                }).then(function (outcome) {
                                                                    console.log("Inrease")
                                                                    console.log(outcome)
                                                                })

                                                                E_Register_User.updateOne({ userid: loggedinUserID }, {
                                                                    Balance: senderBalanceBecome
                                                                }).then(function (outcome) {
                                                                    console.log("Decrease")
                                                                    console.log(outcome)
                                                                })
                                                                var todayy = new Date();
                                                                var boughtondate = todayy.getFullYear() + '-' + (todayy.getMonth() + 1) + '-' + todayy.getDate();
                                                                const purchase = new HistoryOfPurchase({
                                                                    boughtByUserID: loggedinUserID, boughtByUserEmail: loggedinUserEmail, ProductOwnerUserID: contentUserid, ProductOwnerEmail: contentUserEmail, ContentID: contentID, BoughtOn_Date: boughtondate, ContentPrice: priceOfContent
                                                                })
                                                                purchase.save()
                                                                    .then(function (result) {
                                                                        res.status(201).json({ status: true, message: "Successfully Bought" })
                                                                    })
                                                                    .catch(function (err) {
                                                                        res.status(501).json({ message: err })
                                                                    })

                                                            }

                                                            // console.log("userData")
                                                            // console.log(userdata)
                                                            res.status(201).json({ message: "successfully bought" })

                                                        })
                                                        .catch(function (err) {
                                                            res.status(500).json({ message: err })
                                                        })
                                                }
                                                else {
                                                    res.status(201).json({ message: "You have already bought this content" })
                                                    // console.log("User have already Subscribed")
                                                }
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
            res.status(201).json({ message: err })
        })
})

router.get('/detailsofpurchase', authentication.verifyUser, function (req, res) {
    const loggedInUser = req.userData._id
    var balance = ""

    E_Register_User.find({ userid: loggedInUser })
        .then(function (dataa) {
            balance = dataa[0].Balance
            // console.log("balance")
            // console.log(balance)
        })
        .catch(function (err) {
            res.status(500).json({ message: err })
        })

    HistoryOfPurchase.find()
        .then(function (data) {
            var buy = data.filter(function (ele) {
                return ele.boughtByUserID == loggedInUser
            })

            var sold = data.filter(function (ele) {
                return ele.ProductOwnerUserID == loggedInUser
            })

            // console.log(filterdata)
            var buylength = buy.length
            // console.log("Total Content bought")
            // console.log(buylength)

            var soldlength = sold.length
            // console.log("Total Content Sold")
            // console.log(soldlength)
            res.status(201).json({ status: true, buylength: buylength, soldlength: soldlength, pdata: buy, sdata: sold, balance: balance })
        })
        .catch(function (err) {
            res.status(500).json({ message: err })
        })
})

router.put('/loadBalance', authentication.verifyUser, function (req, res) {
    const loggedinuser = req.userData._id
    const balance = parseInt(req.body.balance)
    const Mpin = req.body.Mpin
    console.log("balance")
    console.log(balance)

    // const int = parseInt(balance)


    E_Register_User.find({ userid: loggedinuser })
        .then(function (udata) {
            var mpin = udata[0].MPin
            var remainingBalance = udata[0].Balance
            if (mpin == Mpin) {
                E_Register_User.updateOne({ userid: loggedinuser }, {
                    Balance: remainingBalance + balance
                })
                    .then(function (data) {
                        res.status(201).json({ status: true, message: "Balance Loaded Successfully" })
                    })
                    .catch(function (err) {
                        res.status(500).json({ message: err })
                    })
            }
            else {
                res.status(201).json({ message: "Incorrect MPin. Try Again." })
            }
        })
        .catch(function (err) {
            res.status(500).json({ message: err })
        })

})


router.post('/ewallet/login', authentication.verifyUser, function (req, res) {
    const loggedinuser = req.userData._id
    const Email = req.body.Email
    const MPin = req.body.MPin

    E_Register_User.find({ userid: loggedinuser })
        .then(function (data) {
            
            var email = data[0].Email;
            var mpin = data[0].MPin;

            var filterdata = data.filter(function (ele) {
                return ele.Email == Email && ele.MPin == MPin
            })

            console.log("filterdata")
            console.log(filterdata)
            res.status(201).json({ filterdata: filterdata })


            // res.status(201).json({ email, mpin })
        })
        .catch(function (error) {
            res.status(500).json({ message: error })
        })
})

module.exports = router;
