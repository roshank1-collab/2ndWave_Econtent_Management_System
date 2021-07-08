const express = require('express');
const Users = require('../model/user');
const { check, validationResult } = require('express-validator')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken');
const router = express.Router();
//const checkAuth = require('../miiddleware/checkAuth'); // for checking user
const upload = require('../middleware/upload') //file upload or picture 



// for add clients 
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
    if (errors.isEmpty()) {
        if (req.files == undefined) {
            console.log(req.files);
            return res.status(201).json({ status: false, message: "Invalid  file format" })

        }
        bcryptjs.hash(req.body.password, 10, function (err, hash) {
            const User = new Users({
                First_name: req.body.,
                Last_name: req.body.lastname,
                Dob: req.body.Dob,
                gender: req.body.gender,
                address: req.body.address,
                Phone_number: req.body.phone_number,
                institution_name: req.body.institution_name,
                Email: req.body.email,
                Password: hash,
                Profie_Picture:req.files['Profie_Picture'][0].filename,
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
module.exports = router;
