const mongoose = require('mongoose')
const validator = require('mongoose-validator')

const ratechannel = mongoose.model("RateChannel", {
    RatedBy: {
        type: String,
        requried: true
    },
    // RateByImage: {
    //     type: String,
    //     requried : true
    // },
    // RateByName: {
    //     type: String,
    //     requried : true
    // },
    RatedTo: {
        type: String,
        required: true
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

module.exports = ratechannel