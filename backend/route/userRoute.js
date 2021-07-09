const express = require('express');
const Users = require('../model/user');
const { check, validationResult } = require('express-validator')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken');
const router = express.Router();
//const checkAuth = require('../miiddleware/checkAuth'); // for checking user
const upload = require('../middleware/upload') //file upload or picture 
const authentication = require('../middleware/authentication'); //token


// for registration of users
router.post("/User/SignUp", upload, [
    check('lastname', "last name  is required !!").not().isEmpty(),
    check('Dob', "Date of birth is required").not().isEmpty(),
    check('gender', "Gender is required").not().isEmpty(),
    check('address', "address is required").not().isEmpty(),
    check('phone_number', "phone number is required").not().isEmpty(),
    check('institution_name', "institution name is required").not().isEmpty(),
    check('email', "email is required").not().isEmpty(),
    check('password', " password is required").not().isEmpty()

], function (req, res) {
    const errors = validationResult(req);
    console.log(req.files);
    if (errors.isEmpty()) {
        if (req.files == undefined) {
            console.log(req.files);
            return res.status(201).json({ status: false, message: "Invalid  file format" })

        }
        bcryptjs.hash(req.body.password, 10, function (err, hash) {
            const User = new Users({
                First_name: req.body.firstname,
                Last_name: req.body.lastname,
                Dob: req.body.Dob,
                gender: req.body.gender,
                address: req.body.address,
                Phone_number: req.body.phone_number,
                institution_name: req.body.institution_name,
                Email: req.body.email,
                Password: hash,
                Profie_Picture:req.files['Profile_Picture'][0].filename,
                institution_ID: req.files['institution_ID'][0].filename

            });
            User.save().then(
                function (result) {
                    res.status(200).json({ status: true, message: " User Registered!!" })
                }
            ).catch(
                function (err) {
                    res.status(201).json({ status: false, message: err })
                })
        })

    } else {
        console.log(errors.array())
        res.status(400).send(errors.array())
    }
})

//Login
router.post('/user/login', function (req, res) {
    const email = req.body.email
    const password = req.body.password

    //now we need to find if the user exits
    Users.findOne({ Email: email}).
        then(function (userData) {
            if (userData === null) {
                //username does not exits
                return res.status(201).json({ success: false, message: "Credentials doesn't match!!!" })
            }
            bcryptjs.compare(password, userData.Password, function (err, result) {
                if (result == false) {
                    return err.status(201).json({ success: false, message: "password doesn't match!!! Please try again" })
                }
                //token generate
                const token = jwt.sign({ userId: userData._id }, 'secretkey');
                res.status(200).json({
                    message: "Auth Success",
                    token: token,
                    success: true                  
                })              
            })

        }).catch(
            function (err) {
                res.status(500).json({ message: err })
            }
        )
})
module.exports = router;
