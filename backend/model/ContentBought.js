const mongoose = require('mongoose')

const ContentBought = mongoose.model('ContentBought', {
    contentid: {
        type: String
    },
    boughtby_email: {
        type : String
    },
    boughtby_khaltiid: {
        type : String
    },
    productowner_email: {
        type : String
    },
    productowner_khaltiid: {
        type : String
    },
    boughton_date: {
        type : String
    }

})

module.exports = ContentBought;