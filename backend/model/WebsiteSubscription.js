const mongoose = require('mongoose')

const WebsiteSubscription = mongoose.model('WebsiteSubscription', {
    SubscribeBy_Email: {
        type: String,
        required : true
    }
})

module.exports = WebsiteSubscription;