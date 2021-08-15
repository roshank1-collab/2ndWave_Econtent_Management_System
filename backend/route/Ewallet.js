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
    // const loggedinUserEmail = req.userData.Email
    var contentUserid = ""
    var priceOfContent = ""
    var balanceOfReceiver = ""
    var balanceOfSender = ""

    UploadContent.findOne({ _id: contentID })
        .then(function (data) {
            priceOfContent = data.price
            console.log("priceOfContent")
            console.log(priceOfContent)

            contentUserid = data.userid
            console.log("contentUserid")
            console.log(contentUserid)

            E_Register_User.find()
                .then(function (userdata) {

                    //  getting balance of receiver                     
                    var filterReceiver = userdata.filter(function (ele) {
                        return ele.userid == contentUserid
                    })

                    balanceOfReceiver = filterReceiver[0].Balance
                    console.log("Reciever Balance")
                    console.log(balanceOfReceiver)
                    //  getting balance of receiver

                    //  getting balance of sender
                    var filterSender = userdata.filter(function (ele) {
                        return ele.userid == loggedinUserID
                    })

                    balanceOfSender = filterSender[0].Balance
                    console.log("Sender Balance")
                    console.log(balanceOfSender)
                    //  getting balance of sender


                    if (balanceOfSender < 1 || balacneOfSender < priceOfContent) {
                        res.status(201).json({ status: "Insufficient Balance", message: "Load Amount to your wallet first" })
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
        })
        .catch(function (err) {
            res.status(500).json({ message: err })
        })




})

module.exports = router;