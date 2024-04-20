const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');
const MedicalRecord = require('../models/MedicalRecord');

// Post a new medical record
router.post('/',
    async (req, res) => {
        const { patient, doctor, recordText } = req.body;

        try {
            const newRecord = new MedicalRecord({
                patient,
                doctor,
                recordText,
            });

            const record = await newRecord.save();
            res.json(record);
        } catch (err) {
            console.error(err.message);
            res.status(500).send('Server Error');
        }
    }
);

// Get all medical records for a specific patient
router.get('/patient', async (req, res) => {
    console.log(req);
    const patient = req.params.id;
    try {
        // console.log(req.params.patientId);
        const records = await MedicalRecord.findOne({patient});
        res.json(records);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Get all medical records for a specific patient
router.get('/patient/:patientId', async (req, res) => {
    try {
        const records = await MedicalRecord.find({ patient: req.params.patientId }).sort({ date: -1 });
        res.json(records);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Update a medical record
router.put('/:id', async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { recordText } = req.body;
    const recordFields = { recordText };

    try {
        let record = await MedicalRecord.findById(req.params.id);
        if (!record) return res.status(404).json({ msg: 'Medical record not found' });
        // Check user permission
        if (record.doctor.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        }
        record = await MedicalRecord.findByIdAndUpdate(req.params.id, { $set: recordFields }, { new: true });
        res.json(record);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Delete a medical record
router.delete('/:id', auth, async (req, res) => {
    try {
        let record = await MedicalRecord.findById(req.params.id);

        if (!record) return res.status(404).json({ msg: 'Medical record not found' });

        // Check user permission
        if (record.doctor.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        }

        await MedicalRecord.findByIdAndRemove(req.params.id);

        res.json({ msg: 'Medical record deleted' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
