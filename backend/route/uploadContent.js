const express = require("express");
const router = express.Router();
const UploadContent = require('../models/Uploadcontent.js')
const authentication = require('../middleware/authentication');
const bcryptjs=require('bcryptjs')
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const uploadvideo = require('../middleware/uploadvideo')



//inserting content
router.post('/content/insert', uploadvideo.single('videos'), function (req, res) {
    // console.log(req.file);
    if (req.file == undefined) {
        return res.status(400).json({ message: "Invalid file format" })
    }
    const heading = req.body.heading;
    const video = req.file.filename;
    const content_description = req.body.content_description;
    const categories = req.body.categories;
    const price = req.body.price;

    const me = new UploadContent({
        heading: heading, video: video, content_description: content_description,
        categories: categories, price: price

   me.save().then(function (result) {
        res.status(201).json({ message: "Conent has been added successfully !!!" });
    }).catch(function (err) {
        res.status(500).json({ message: err })
    })

})

//CONTENT DELETE
router.delete('/content/delete/:id', function (req, res) {

    const id = req.params.id;
    UploadContent.deleteOne({ _id: id })
        .then(function (result) {
            res.status(200).json({ message: "Content has been deleted successfully !!!", status: "true" })
        })
        .catch(function (err) {
            res.status(500).json({ message: err, status: "false" })
        })
})



//gets all info
router.get('/content/all', function (req, res) {
    product.find().then(function(data){
        console.log(data)
        res.status(200).json({
            ContentData: data
        })
    }).catch(function (e) {
        res.status(500).json(e)
    })
})


//to show only single element
router.get('/content/single/:id', function (req, res) {
    const id = req.params.id;
    product.findOne({ _id: id }).then(function (data) {
        res.status(200).json({data})
    }).catch(function (err) {
        res.status(500).json({ message: err })
    })
})



module.exports = router
