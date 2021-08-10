const mongoose = require('mongoose')

const ContactUs = mongoose.model('ContactUs', {
    name: {
        type: String        
    },
   email: {
        type: String
    },
  phone: {
        type: String
    },
  message: {
        type: String
    }

})

module.exports = ContactUs;