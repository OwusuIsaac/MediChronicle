const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['patient', 'doctor'],
        default: 'patient',
        required: true
    },
    // Additional fields for more detailed user profiles
    // fullName: {
    //     type: String,
    //     required: true
    // },
    contactNumber: {
        type: String,
        required: false
    },
    address: {
        type: String,
        required: false
    },
    speciality: {
        type: String,
        required: false
    },
    qualifications: {
        type: String,
        required: false
    },
    bio: {
        type: String,
        required: false
    },
    registeredAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', UserSchema);
