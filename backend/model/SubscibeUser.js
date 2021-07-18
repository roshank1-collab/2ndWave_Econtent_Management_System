const mongoose = require('mongoose')

const SubscribeUser = mongoose.model('SubscribeUser', {
    SubscribeBy_Userid: {
        type: String        
    },
    SubscribeBy_Name: {
        type: String
    },
    SubscribeBy_Email: {
        type: String
    },
    SubscribeTo_Userid: {
        type: String
    },
    SubscribeTo_Name: {
        type: String
    },
    SubscribeTo_Email: {
        type: String
    }

})

module.exports = SubscribeUser;