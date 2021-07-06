
const mongoose = require("mongoose")
const Users = mongoose.model("User", {
full_name: {
    type: String,
    required: true
},
Dob: {
    type: String,
    required: true
},
gender: {
    type: String,
    required: true
},
address: {
    type: String,
    required: true
},
contact: {
    type: String,
    required: true,

},
citizenshipNumber: {
    type: String,
    required: true

}

});


module.exports = Users