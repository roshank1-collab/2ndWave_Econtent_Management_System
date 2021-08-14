const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload') //file upload or picture
const { check, validationResult } = require('express-validator')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken');
const authentication = require('../middleware/authentication');

const E_Register_User = require('../model/Ewallet/E_Register_User')

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

        E_Register_User.find()
            .then(function (data) {
                if (data.length > 1) {
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
                            MPin: req.body.MPin
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
                res.status(500).json({ status : "User already signed",message: err })
            })

})
    


module.exports = router;