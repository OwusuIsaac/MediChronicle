const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();
require('dotenv').config();

// Register a new user
router.post('/register', async (req, res) => {
    const { username, email, password, role} = req.body;
    try {
        // Check if the user already exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        // Create a new user object
        user = new User({
            username,
            email,
            password, // this will be hashed below
            role
        });

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        // Save the user to the database
        await user.save();

        // Create and return the JWT token
        const payload = {
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
                role: user.role
            }
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: 36000 }, // token expires in 10 hours
            (err, token) => {
                if (err) throw err;
                res.json({ user: payload.user, token });
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Authenticate user and get token
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find the user by email
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }

        // Check the password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }

        // If user is found and password is right, create a token
        const payload = {
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
                role: user.role
            }
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: 36000 }, // 10 hours
            (err, token) => {
                if (err) throw err;
                res.json({ user: payload.user, token });
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
