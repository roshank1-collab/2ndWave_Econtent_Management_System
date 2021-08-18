const mongoose = require('mongoose');
const validator = require('mongoose-validator')

const E_Register_User = mongoose.model("E-User", {
    FullName: {
        type: String,
        // required: [true, 'FullName required'],
        required : true
    },
    Address: {
        type: String,
        // required: [true, 'Address required']
        required : true
    },
    PhoneNumber: {
        type: Number,
        // required: [true, 'Phone Number required'],
        required : true,
        unique: true
    },
    Sex: {
        type: String,
        // required: [true, 'Gender required'],
        required : true,
        enum: {
            values: ['Male', 'Female', 'Others'],
            message: '{VALUE} is not supported'
        }
    },
    Email: {
        type: String,
        lowercase: true,
        trim: true,
        // required: [true, 'Email required'],
        required : true,
        validate: [
            validator({
                validator: 'isEmail',
                message: 'Oops..please enter valid email'
            })
        ],
        unique: true,
    },
    Balance: {
        type: Number,
        // required: [true, "Input Balance"],
        required : true,
        min : 1
    },
    Password: {
        type: String,
        // min: 8,
        trim: true,
        // required: [true, 'Password required']
        required : true
    },
    MPin: {
        type: Number,
        // min: 4,
        // max: 4,
        // required: [true, 'PIN requried']
        required : true

    },
    userid: {
        type : String
    }

})

module.exports = E_Register_User;