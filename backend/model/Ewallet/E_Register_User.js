const mongoose = require('mongoose');
const validator = require('mongoose-validator')

const E_Register_User = mongoose.model("E-User", {
    FullName: {
        type: String,
        required: [true, 'FullName required']
    },
    Address: {
        type: String,
        required: [true, 'Address required']
    },
    PhoneNumber: {
        type: Number,
        required: [true, 'Phone Number required'],
        unique: true
    },
    Sex: {
        type: String,
        required: [true, 'Gender required'],
        enum: {
            values: ['Male', 'Female', 'Others'],
            message: '{VALUE} is not supported'
        }
    },
    Email: {
        type: String,
        lowercase: true,
        trim: true,
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
        required: [true, "Input Balance"]
    },
    Password: {
        type: String,
        // min: 8,
        trim: true,
        required: [true, 'Password required']
    },
    MPin: {
        type: Number,
        // min: 4,
        // max: 4,
        required: [true, 'PIN requried']

    },
    userid: {
        type : String
    }

})

module.exports = E_Register_User;