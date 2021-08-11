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
const WebsiteSubscription = require('../model/WebsiteSubscription');

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
                    userid: userData._id,
                    loginstatus: true
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


// susbcribe route
router.post('/channel/subscribe/:uid', authentication.verifyUser, function (req, res) {
    const subscribeToPerson = req.params.uid;
    const loggedIn_UserID = req.userData._id
    const loggedIn_UserName = req.userData.First_name
    const loggedIn_UserEmail = req.userData.Email
    Users.find({ _id: subscribeToPerson })
        .then(function (data) {
            // console.log(data)
            // console.log(loggedIn_UserID)
            const SubscribeTo_UserId = data[0]._id
            const SubscribeTo_Name = data[0].First_name
            const SubscribeTo_Email = data[0].Email

            SubscribeUser.find()
                .then(function (uuudata) {
                    console.log(uuudata)
                    var filterdata = uuudata.filter(function (ele) {
                        return ele.SubscribeBy_Userid == loggedIn_UserID && ele.SubscribeTo_Userid == SubscribeTo_UserId
                    })
                    console.log("filterdata")
                    console.log(filterdata)

                    if (filterdata.length < 1) {
                        const SubscribeModel = new SubscribeUser({
                            SubscribeTo_Userid: SubscribeTo_UserId, SubscribeTo_Name: SubscribeTo_Name, SubscribeTo_Email: SubscribeTo_Email, SubscribeBy_Userid: loggedIn_UserID,
                            SubscribeBy_Name: loggedIn_UserName, SubscribeBy_Email: loggedIn_UserEmail
                        })
                        SubscribeModel.save()
                            .then(function (result) {
                                res.status(201).json({ status: true, statusOfSubscription: "Subscribed Successfully" })
                            })
                            .catch(function (err) {
                                res.status(501).json({ message: err })
                            })
                    }
                    else  {
                        res.status(201).json({ statusOfSubscription: "You have already Subscribed this user" })
                        // console.log("User have already Subscribed")
                    }
                    // console.log(uuudata)

                })
                .catch(function (err) {
                    res.status(501).json({ message: err })
                })
        })
});

//get info on one user
router.get('/user/singleuser/:id', authentication.verifyUser, function (req, res) {
    const userid = req.params.id
    Users.find({ _id: userid })
        .then(function (data) {
            console.log(data)
            res.status(200).json({ status: true, message: "Information received", userdata: data })
        }).catch(function (err) {
            res.status(500).json({ message: err })
        })
})

//user update
router.put('/user/update/:id', function (req, res) {
    const uid = req.params.id;
    const First_name = req.body.First_name;
    const Last_name = req.body.Last_name;
    const Email = req.body.Email;
    const Dob = req.body.Dob;
    const Phone_number = req.body.Phone_number;
    const address = req.body.address;
    const gender = req.body.gender;
    const institution_name = req.body.institution_name;

    Users.updateOne({ _id: uid }, {
        First_name: First_name, Last_name: Last_name, Email: Email, Dob: Dob, Phone_number: Phone_number, address: address, gender: gender, institution_name: institution_name
    })
        .then(function (result) {
            res.status(200).json({ status: true, message: "User Info Updated" })
        })
        .catch(function (err) {
            res.status(500).json({ message: err })
        })


})

//Delete Account
router.delete('/user/delete/:id', function (req, res) {
    const uid = req.params.id
    Users.deleteOne({ _id: uid })
        .then(function (result) {
            res.status(200).json({ status: true, message: "Account Deleted" })
        }).catch(function (err) {
            res.status(500).json({ message: err })
        })
})



//user subscrition for notification
router.post('/user/subscribe/website/notification/:email', function (req, res) {
    const email = req.params.email
    WebsiteSubscription.find({ SubscribeBy_Email: email })
        .then(function (data) {
            if (data.length < 1) {
                const data = new WebsiteSubscription({
                    SubscribeBy_Email: req.body.email
                })
                data.save().then(
                    function (result) {
                        res.status(200).json({ status: true, message: "User has subscribed the website!!" })
                    }
                ).catch(
                    function (err) {
                        res.status(201).json({ status: false, message: err })
                    })
            }
            else {
                res.status(201).json({ message: "You have already Subscribed the website!!" })
            }
        }).catch(function (err) {
            res.status(500).json({ message: err })
        })


})

//update password route 
router.put('/password',authentication.verifyUser, function (req, res) {
    const id = req.userData.id
    Users.findOne({ _id: id }).then(function (data) {
        bcryptjs.compare(req.body.password, data.Password, function (err, result) {
            if (result === false) {
                return res.status(201).json({ success: false, message: " password incorrect!!!" })
            }
            else {
                bcryptjs.hash(req.body.NewPassword, 10, function (err, hash) {
                    Users.updateOne({_id:id},{
                       Password:hash 
                    }).then(
                        function (result) {
                            res.status(200).json({ status: true, message: " password Updated" })
                        }
                    ).catch(
                        function (result) {
                            res.status(201).json({ status: true, message: result })
                        }
                    )
                });

            }
        })
    })



})



module.exports = router;