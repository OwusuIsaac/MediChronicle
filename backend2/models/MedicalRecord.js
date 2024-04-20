const mongoose = require('mongoose');

const MedicalRecordSchema = new mongoose.Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        // required: true
        // type: String,
        required: true

    },
    doctor: {
        // type: mongoose.Schema.Types.ObjectId,
        // ref: 'User',
        // required: true
        type: String,
        required: true
    },
    recordText: {
        type: String,
        required: true
    },
    // recordImage: {
    //     type: String,
    //     required: false
    // },
    // recordType: {
    //     type: String,
    //     enum: ['Consultation Note', 'X-Ray', 'MRI', 'Blood Test', 'Prescription', 'Other'],
    //     default: 'Consultation Note'
    // },
    date: {
        type: Date,
        required: false
    }
    // nextAppointmentDate: {
    //     type: Date,
    //     required: false
    // },
    // notes: {
    //     type: String,
    //     required: false
    // },
    // createdDate: {
    //     type: Date,
    //     default: Date.now
    // }
});

module.exports = mongoose.model('MedicalRecord', MedicalRecordSchema);
