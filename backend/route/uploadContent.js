const express = require("express");
const router = express.Router();
const UploadContent = require('../model/Uploadcontent');
const uploadvideo = require('../middleware/uploadvideo')



//inserting content
router.post('/content/insert/:id', uploadvideo, function (req, res) {
    console.log(req.body);
    console.log(req.files['video']);

    if (req.files == undefined) {
        return res.tatus(400).json({ message: "Invalid file format" })
    }
    const id = req.params.id;
    const heading = req.body.title;
    const video = req.files['video'][0].filename;
    const content_description = req.body.description;
    const categories = req.body.categories;
    const price = req.body.Price;
    const me = new UploadContent({
        heading: heading, video: video, content_description: content_description,
        categories: categories, price: price, userid: id
    })
    me.save().then(function (result) {
        res.status(201).json({ message: "Conent has been added successfully !!!" });
    }).catch(function (err) {
        console.log(err)
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
    UploadContent.find().then(function (data) {
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
    UploadContent.find({userid: id }).then(function (data) {
        res.status(200).json({ data })
        console.log(data)
    }).catch(function (err) {
        res.status(500).json({ message: err })
    })
})


// to fetch the catagoris of the content
router.get('/content/catagories', function (req, res) {
    UploadContent.find().distinct('categories').then(function (result) {
        res.status(200).json({ status: true, catagories: result })
    }).catch(function (err) {
        res.status(500).json({ message: err })
    })
})


// to fetch filtred catagores content 
router.get('/content/catagories/:catagories', function (req, res) {
    UploadContent.find({ categories: req.params.catagories }).then(function (result) {
        res.status(200).json({ status: true, catagories: result })
    }).catch(function (err) {
        res.status(500).json({ message: err })
    })
})
module.exports = router