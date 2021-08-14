const express = require('express')
const router = express.Router();
const authentication = require('../middleware/authentication');
const ratechannel = require('../model/RateChannel');
const ratecontent = require('../model/RateContent')
const users = require('../model/user');


//rating user's channel
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

//re-rating user's channel
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

//getting rate of certain user
router.get('/getrating/:id', authentication.verifyUser, function (req, res) {
    const ratedToUserId = req.params.id
    const rateByUserId = req.userData._id //loggedin user
    console.log("aayo hai uta bata")
    ratechannel.find()
        .then(function (data) {
            var filterdata = data.filter(function (ele) {
                return ele.RatedBy == rateByUserId && ele.RatedTo == ratedToUserId
            })
            var ratednumber = filterdata[0].RateNumber
            res.status(201).json({ RatedNumber: ratednumber })
        })
        .catch(function (err) {
            res.status(500).json({ message: err })
        })
})


//rating content
router.post('/ratingcontent/:id', authentication.verifyUser, function (req, res) {
    const contentid = req.params.id
    const ratedByUserId = req.userData._id
    const rate = req.body.rate
    ratecontent.find()
        .then(function (data) {
            var filterdata = data.filter(function (ele) {
                return ele.RatedBy == ratedByUserId && ele.ContentId == contentid
            })

            if (filterdata.length < 1) {
                var today = new Date();
                var ratedate = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
                const data = new ratecontent({
                    RatedBy: ratedByUserId, ContentId: contentid, RateNumber: rate, RatedOnDate: ratedate
                })

                data.save().then(function (result) {
                    res.status(200).json({ status: true, message: "Content Rated Successfully" })
                }).catch(function (err) {
                    res.status(500).json({ message: err })
                })
            }
            else {
                res.status(500).json({ message: "already rated" })
            }
        })
        .catch(function (err) {
            res.status(500).json({ message: err })
        })
})

//re-rating content
router.put('/ratingcontent/update/:id', authentication.verifyUser, function (req, res) {
    const contentid = req.params.id;
    const ratedByUserId = req.userData._id //loogedin user
    const rate = req.body.rate
    ratecontent.find().then(function (data) {
        var filterdata = data.filter(function (ele) {
            return ele.RatedBy == ratedByUserId && ele.ContentId == contentid
        })
        var previousRated = filterdata[0]._id
        ratecontent.updateOne({ _id: previousRated }, {
            RateNumber: rate
        }).then(function (result) {
            res.status(201).json({ message: "rating updated", status: true })
        })
            .catch(function (er) {
                res.status(500).json({ message: er })
            })
    }).catch(function (err) {
        res.status(500).json({ message: err })
    })

})

//getting rate of certain content
router.get('/getratingcontent/:id', authentication.verifyUser, function (req, res) {
    const contentid = req.params.id
    const rateByUserId = req.userData._id //loggedin user    
    ratecontent.find()
        .then(function (data) {
            var filterdata = data.filter(function (ele) {
                return ele.RatedBy == rateByUserId && ele.ContentId == contentid
            })
            var ratednumber = filterdata[0].RateNumber
            res.status(201).json({ RatedNumber: ratednumber })
        })
        .catch(function (err) {
            res.status(500).json({ message: err })
        })
})


module.exports = router