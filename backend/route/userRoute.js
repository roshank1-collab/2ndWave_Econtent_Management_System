const express = require('express');
const User = require('../model/user');
const { check, validationResult } = require('express-validator')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken');
const router = express.Router();
//const checkAuth = require('../miiddleware/checkAuth'); // for checking user
//const upload = require('../miiddleware/upload') //file upload or picture 



// for add clients 
router.post("/clients/Add_Clients", [
    check('citizenshipNumber', "citizenship Number is required!").not().isEmpty(),
    check('fullname', "Name is required !!").not().isEmpty(),
    check('Dob', "Date of birth is required").not().isEmpty(),
    check('gender', "Gender is required").not().isEmpty(),
    check('address', "address is required").not().isEmpty(),
    check('contact', "cantact is required").not().isEmpty(),

], function (req, res) {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        
        const fullName = req.body.fullname;
        const dob = req.body.Dob;
        const Gender = req.body.gender;
        const Address = req.body.address;
        const Contact = req.body.contact;
      
        bcryptjs.hash(Password, 10, function (err, hash) {
            const User = new Users({
                full_name: fullName,
                Dob: dob,
                gender: Gender,
                address: Address,
                contact: Contact,
            });
            User.save().then(
                function (result) {
                    res.status(200).json({ status: true, message: " Clients Registered!!" })
                }
            ).catch(
                function (err) {
                    res.status(201).json({ status: false, message: err })
                })
        });
    } else {
        console.log(errors.array())
        res.status(400).send(errors.array())
    }


})
module.exports=router;