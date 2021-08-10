
const express = require("express");
const router = express.Router();
const ContactUs = require('../model/contactus')


router.post('/contact/insert', function (req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const message = req.body.message;


        const contactus = new ContactUs({
            name:name,email: email,phone:phone, message:message
        })
            contactus.save().then(function (result) {
                res.status(200).json({ message: "Your message has been sent successfully."})
            }).catch(function (err) {
                res.status(201).json({status:'success', message: err })
                console.log(err)
            })
        })



router.delete('/message/delete/:cid', function (req, res) {

    const cid = req.params.pid;
    ContactUs.deleteOne({ _id: cid })
        .then(function (result) {
            res.status(200).json({ message: "Message deleted", status: "true" })
        })
        .catch(function (err) {
            res.status(500).json({ message: err, status: "false" })
        })
})




//gets all info
router.get('/contact/all', function (req, res) {
    ContactUs.find().then(function(data){
        res.status(200).json({
            productData: data
        })
    }).catch(function (e) {
        res.status(500).json(e)
    })
})




module.exports = router