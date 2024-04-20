const express = require('express');
const { check, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const auth = require('../middleware/auth');
const router = express.Router();

// Get current user profile
router.get('/', auth, async (req, res) => {
    try {
        // req.user is getting filled by the auth middleware
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Update user profile
router.put('/update', [auth, [
    check('email', 'Please include a valid email').isEmail(),
    check('fullName', 'Full name is required').not().isEmpty()
]], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullName, email, contactNumber, address, speciality, qualifications, bio } = req.body;
    const updateFields = { fullName, email, contactNumber, address, speciality, qualifications, bio };

    try {
        let user = await User.findOneAndUpdate(
            { _id: req.user.id },
            { $set: updateFields },
            { new: true }
        ).select('-password');

        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

// Search for patient (can be used to find patients by doctors)
router.get('/search/:name', async (req, res) => {
    try {
        console.log(req.params.name);
        const  patientName  = req.params.name;
        const patients = await User.find({ username: `${patientName}`, role: 'patient' })
        if(patients.length === 0) {
            return res.json({ msg: 'No patients found' }).status(404);
        }
        return res.json(patients).status(200);
    }
    catch (err) {
        console.error(err.message);
        return res.status(500).json({ msg: 'Server Error' });
    }
});

// Search for patient (can be used to find doctors by patients)
router.get('/searchdoctor/:name', async (req, res) => {
    try {
        console.log(req.params.name);
        const  doctorName  = req.params.name;
        const doctors = await User.find({ username: `${doctorName}`, role: 'doctor' })
        if(doctors.length === 0) {
            return res.json({ msg: 'No doctor found' }).status(404);
        }
        return res.json(doctors).status(200);
    }
    catch (err) {
        console.error(err.message);
        return res.status(500).json({ msg: 'Server Error' });
    }
});


module.exports = router;
