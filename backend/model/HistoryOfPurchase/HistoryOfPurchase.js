const mongoose = require("mongoose")
const validator = require("mongoose-validator")

const HistoryOfPurchase = mongoose.model('HistoryOfPurchase', {
    boughtByUserID: {
        type: String        
    },
    boughtByUserEmail: {
        type : String
    },
    ProductOwnerUserID: {
        type : String
    },
    ProductOwnerEmail: {
        type : String
    },
    ContentID: {
        type : String
    },
    BoughtOn_Date: {
        type : String
    },
    ContentPrice: {
        type : Number
    }
})

module.exports = HistoryOfPurchase;