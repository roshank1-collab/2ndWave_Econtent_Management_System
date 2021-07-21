
const mongoose = require("mongoose")
const UploadContent = mongoose.model("Uploadcontent", {
    userid: {
        type : String
    },
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


module.exports = UploadContent;
