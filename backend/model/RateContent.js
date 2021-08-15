const mongoose = require('mongoose')
const validator = require('mongoose-validator')

const ratecontent = mongoose.model("RateContent", {
    RatedBy: {
        type: String,
        requried: true
    },
    ContentId: {
        type: String,
        required : true
    },
    RateNumber: {
        type: Number,
        required: true,
        min : 1,
        max : 5
    },
    RatedOnDate: {
        type: String
    }
    
})

module.exports = ratecontent