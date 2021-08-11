const mongoose = require('mongoose')
const validator = require('mongoose-validator')

const ratechannel = mongoose.model("RateChannel", {
    RatedBy: {
        type: String,
        requried: true
    },
    RatedTo: {
        type: String,
        required: true
    },
    RateNumber: {
        type: Number,
        required: true
    },
    RatedOnDate: {
        type: String
    }
})

module.exports = ratechannel