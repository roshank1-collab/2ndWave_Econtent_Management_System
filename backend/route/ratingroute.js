const express = require('express')
const router = express.Router();
const authentication = require('../middleware/authentication');
const ratechannel = require('../model/RateChannel');
const users = require('../model/user');

router.post('/ratingchannel/:id', authentication.verifyUser, function (req, res) {
    const ratedToUserId = req.params.id
    const rateByUserId = req.userData._id //loggedin user
    const rate = req.body.rate
    ratechannel.find().then(function (data) {
        var filterdata = data.filter(function (ele) {
            return ele.RatedBy == rateByUserId && ele.RatedTo == ratedToUserId
        })
        if (filterdata.length < 1) {
            var today = new Date();
            var ratedate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            const saveratedata = new ratechannel({
                RatedBy: rateByUserId, RatedTo: ratedToUserId, RateNumber: rate, RatedOnDate: ratedate
            })
            saveratedata.save()
                .then(function (result) {
                    res.status(201).json({ status: true, message: "rated successfully" })
                })
                .catch(function (err) {
                    res.status(400).json({ message: err })
                })
        }
        else {
            res.status(201).json({ message: "Already rated" })
        }
    })
        .catch(function (err) {
            res.status(500).json({ message: err })
        })

})


router.put('/ratingchannel/update/:id', authentication.verifyUser, function (req, res) {
    const ratedToUserId = req.params.id
    const rateByUserId = req.userData._id //loggedin user
    const rate = req.body.rate
    ratechannel.find().then(function (data) {
        var filterdata = data.filter(function (ele) {
            return ele.RatedBy == rateByUserId && ele.RatedTo == ratedToUserId
        })
        var previousRated = filterdata[0]._id
        ratechannel.updateOne({ _id: previousRated },
            { RateNumber: rate })
            .then(function (result) {
                res.status(201).json({ status: true, message: "rating Updated" })
            })
            .catch(function (error) {
                res.status(500).json({ message: err })
            })
    })
        .catch(function (err) {
            res.status(500).json({ message: err })
        })

})


router.get('/getrating/:id', authentication.verifyUser, function(req, res){
    const ratedToUserId = req.params.id
    const rateByUserId = req.userData._id //loggedin user
    console.log("aayo hai uta bata")
    ratechannel.find()
        .then(function (data) {
            var filterdata = data.filter(function(ele){
                return ele.RatedBy == rateByUserId && ele.RatedTo == ratedToUserId
            })
            var ratednumber = filterdata[0].RateNumber                       
            res.status(201).json({RatedNumber : ratednumber})
        })
        .catch(function (err) {
            res.status(500).json({ message: err })
        })
})

module.exports = router