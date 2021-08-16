const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload') //file upload or picture
const { check, validationResult } = require('express-validator')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken');
const authentication = require('../middleware/authentication');

const E_Register_User = require('../model/Ewallet/E_Register_User')
const ContentBought = require('../model/ContentBought');
const UploadContent = require('../model/Uploadcontent');
const Users = require('../model/user');

router.post('/Ewallet/user-register',
    upload, [
    check('FullName', "Full Name  is required !!").not().isEmpty(),
    check('Address', "Address is required").not().isEmpty(),
    check('PhoneNumber', "Phone Number is required").not().isEmpty(),
    check('Sex', "Gender is required").not().isEmpty(),
    check('Email', "Email is required").not().isEmpty(),
    check('Balance', "Balance is required").not().isEmpty(),
    check('Password', "Password is required").not().isEmpty(),
    check('MPin', "MPin is required").not().isEmpty()
],
    authentication.verifyUser, function (req, res) {
        // const FullName = req.body.FullName;
        // const Address = req.body.Address;
        // const PhoneNumber = req.body.PhoneNumber;
        // const Sex = req.body.Sex;
        // const Email = req.body.Email;
        // const Balance = req.body.Balance;
        // const Password = req.body.Password;
        // const MPin = req.body.MPin;
        const USERID = req.userData._id

        E_Register_User.find()
            .then(function (data) {

                var alreadyuser = data.filter(function (ele) {
                    return ele.userid == USERID
                })

                if (alreadyuser.length > 1) {
                    res.status(201).json({ message: "User already exists" })
                }
                else {
                    bcryptjs.hash(req.body.Password, 10, function (err, hash) {
                        const EUser = new E_Register_User({
                            FullName: req.body.FullName,
                            Address: req.body.Address,
                            PhoneNumber: req.body.PhoneNumber,
                            Sex: req.body.Sex,
                            Email: req.body.Email,
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

            })
            .catch(function (err) {
                res.status(500).json({ status: "User already signed", message: err })
            })
    })

router.get('/wallet/:contentid', authentication.verifyUser, function (req, res) {
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
            bcryptjs.compare(password, uudata.Password, function (err, result) {
                if (result == true) {
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

                                ContentBought.find()
                                .then(function (boughtdata) {
                                    var filterboughtdata = boughtdata.filter(function (ele) {
                                        return ele.boughtby_ID == loggedinUserID && ele.productowner_ID == contentUserid && ele.contentid == contentID
                                    })

                                    if (filterboughtdata.length < 1) {

                                        var today = new Date();
                                        var boughtdate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
                                        const boughtdatainfo = new ContentBought({
                                            contentid: contentID, boughtby_email: loggedinUserEmail,
                                            boughtby_ID: loggedinUserID, productowner_email: contentUserEmail, productowner_ID: contentUserid, boughton_date: boughtdate
                                        })
                                        boughtdatainfo.save()
                                            .then(function (result) {
                                                res.status(201).json({ status: true, boughtStatus: "Successfully Bought" })
                                            })
                                            .catch(function (err) {
                                                res.status(501).json({ message: err })
                                            })

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
                                                    res.status(201).json({ status: "Insufficient Balance", message: "Load Amount to your wallet first" })
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
                                                }

                                                // console.log("userData")
                                                // console.log(userdata)
                                                res.status(201).json({ message: "successfully done" })

                                            })
                                            .catch(function (err) {
                                                res.status(500).json({ message: err })
                                            })
                                    }
                                    else {
                                        res.status(201).json({ boughtStatus: "You have already bought this content" })
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
                else {
                    return res.status(201).json({ success: false, message: "Password doesn't match !!! Please try again" })

                }
            })
        })
        .catch(function (err) {
            res.status(201).json({ message: err })
        })






})

module.exports = router;