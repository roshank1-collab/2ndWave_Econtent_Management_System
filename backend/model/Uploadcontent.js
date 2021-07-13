
const mongoose = require("mongoose")
const validator = require('mongoose-validator')
const Uploadcontent = mongoose.model("Uploadcontent", {
   heading: {
        type: String,
        required: true,
    },
    video: {
        type: String,
        required: true
    },
    content_description: {
        type: String,
        required: true
    },
   categories:{
        type:String,
        required: true
    },

    price: {
        type: String,
        required: true
    }
  
});


module.exports = Uploadcontent;
