//checking if the logged in user is authenticated or not
const e = require('express');
const jwt = require('jsonwebtoken');
const user = require('../model/user')


//main guards
module.exports.verifyUser = function (req, res, next) {

    try {
        const token = req.headers.authorization.split(" ")[1]
        const verifiedData = jwt.verify(token, 'secretkey');
        // console.log(verifiedData.userId);

        user.findOne({ _id: verifiedData.userId })
            .then(function (userInfo) {
                // res.send(userInfo)
                req.userData=userInfo
                next();
            })
            .catch(function (err) {
                res.status(400).json({ message: err })
            })
    }

    catch (err) {
        res.status(500).json({ message: err })
    }

}

//guard 2 : it will check if the user is admin or not
module.exports.verifyAdmin = function (req, res, next) {
    if (!req.userData) {
        return res.status(401).json({ message: "Unauthorized User!!!" })
    }
    else if (req.userData.userType !== 'Admin') {
        res.status(401).json({ message: "Unauthorized User!!!" })
    }
    next()
}


// //guard 3 : it will check if the user is customer or not
// module.exports.verifyCustomer = function (req, res, next) {
//     if (!req.userData) {
//         return res.status(401).json({ message: "Unauthorized User!!!" })
//     }
//     else if (req.userData.userType !== 'Customer') {
//         res.status(401).json({ message: "Unauthorized User!!!" })
//     }
// }
