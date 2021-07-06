
const mongoose = require("mongoose")
const validator = require('mongoose-validator')
const Users = mongoose.model("User", {
    First_name: {
        type: String,
        required: true,
    },
    Last_name: {
        type: String,
        required: true
    },
    institution_ID: {
        type: String,
        required: true
    },
    institution_name:{
        type:String,
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
    Phone_number: {
        type: String,
        required: true,

    },
    Profie_Picture:{
        type:String,
        required: true
    },
    Email:{
        type: String,
        lowercase: true,
        trim: true,
        validate: [
          validator({
            validator: 'isEmail',
            message: 'Oops..please enter valid email'
          })
        ],
    },
    Password:{
        type: String,
        minlength: 8,
        trim: true,
        required: true
    }
});


module.exports = Users