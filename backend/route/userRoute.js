const express = require('express');
const Users = require('../model/user');
const subscribeUser = require('../model/SubscibeUser')
const { check, validationResult } = require('express-validator')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken');
const router = express.Router();
const upload = require('../middleware/upload') //file upload or picture 
const authentication = require('../middleware/authentication'); //token
const SubscribeUser = require('../model/SubscibeUser');


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
                Profie_Picture: req.files['Profile_Picture'][0].filename,
                institution_ID: req.files['institution_ID'][0].filename

            });
            User.save().then(
                function (result) {
                    res.status(200).json({ status: true, message: "User Registered!!" })
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
    Users.findOne({ Email: email }).
        then(function (userData) {
            if (userData === null) {
                //username does not exits
                return res.status(201).json({ success: false, message: "User does not exist. Please SignUp first" })
            }
            bcryptjs.compare(password, userData.Password, function (err, result) {
                if (result == false) {
                    return res.status(201).json({ success: false, message: "Password doesn't match !!! Please try again" })
                }
                //token generate
                const token = jwt.sign({ userId: userData._id }, 'secretkey');
                res.status(200).json({
                    message: "Auth Success",
                    token: token,
                    success: true,
                    userid: userData._id
                })
            })

        }).catch(
            function (err) {
                res.status(500).json({ message: err })
            }
        )
})

// retrive user data as Channel fot subscribe except logged in user
router.get('/channel/all/:id', function (req, res) {
    Users.find({ _id: { $nin: [req.params.id] } }).then(function (data) {
        res.status(200).json({ success: true, allchannel: data, count: data.length })
    }).catch(function (err) {
        res.send.status(500).json({ success: false, message: err })
    })
});

// //susbcribe route
// router.post('/channel/susbcribe/:uid', authentication.verifyUser, function (req, res) {
//     const uid = req.params.uid;
//     const loggedIn_User = req.userData._id
//     Users.find({ _id: uid })
//         .then(function (data) {
//             // console.log(data)
//             // console.log(loggedIn_User)
//             const SubscribeTo_UserId = data[0]._id
//             const SubscribeTo_Name = data[0].First_name
//             const SubscribeTo_Email = data[0].Email
//             subscribeUser.find({ SubscribeTo_Userid: uid }).then(function (daataa) {
//                 console.log(daataa)
// if (SubscribeTo_Userid !== "" && loggedIn_User !== "") {
//     res.status(201).json({ message: "user already subscribed" })
// }
// else if (SubscribeTo_Userid === "" && loggedIn_User === "") {
//     const SubscribeModel = new subscribeUser({
//         SubscribeTo_Userid: uid, SubscribeTo_Name: SubscribeTo_Name, SubscribeTo_Email: SubscribeTo_Email, SubscribeBy_Userid: loggedIn_User
//         // SubscribeBy_Name: loggedinuserid.First_name, SubscribeBy_Email: loggedinuserid.Email
//     })
//                     SubscribeModel.save()
//                         .then(function (result) {
//                             res.status(201).json({ status: true, message: "Subscribed Successfully" })
//                         })
//                         .catch(function (err) {
//                             res.status(501).json({ message: err })
//                         })
//                 // }
//             })
//             .catch(function (err) {
//                 res.status(501).json({ message: err })
//             })

//         })
// });

//susbcribe route
router.post('/channel/susbcribe/:uid', authentication.verifyUser, function (req, res) {
    const uid = req.params.uid;
    const loggedIn_User = req.userData._id
    Users.find({ _id: uid })
        .then(function (data) {
            console.log(data)
            console.log(loggedIn_User)
            const SubscribeTo_UserId = data[0]._id
            const SubscribeTo_Name = data[0].First_name
            const SubscribeTo_Email = data[0].Email

            const SubscribeModel = new subscribeUser({
                SubscribeTo_Userid: SubscribeTo_UserId, SubscribeTo_Name: SubscribeTo_Name, SubscribeTo_Email: SubscribeTo_Email, SubscribeBy_Userid: loggedIn_User
                // SubscribeBy_Name: loggedinuserid.First_name, SubscribeBy_Email: loggedinuserid.Email
            })
            SubscribeModel.save()
                .then(function (result) {
                    res.status(201).json({ status: true, message: "Subscribed Successfully" })
                })
                .catch(function (err) {
                    res.status(501).json({ message: err })
                })

        })
});

module.exports = router;