const express = require("express");
const multer = require("multer");

const MedicalEntry = require("../models/MedicalEntry"); // adjust the path as necessary

// Configure multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads"); // The folder where files should be stored - make sure this directory exists
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Construct the file name
  },
});

const upload = multer({ storage: storage });

const router = express.Router();

router.post("/add-entry", upload.array("attachments"), async (req, res) => {
  try {
    // req.body will have the text fields, if there were any
    // req.files will contain files uploaded via 'attachments' field

    // Create a new entry with text fields
    const entryData = {
      ...req.body,
      prescription: req.body.prescription || [], // Default to an empty array if no prescription is provided
      attachments: req.files.map((file) => file.path), // Map through array of files and return array of file paths
    };

    const newEntry = new MedicalEntry(entryData);
    await newEntry.save();

    // Send back a response
    res.status(201).send({ message: "Medical entry added successfully!" });
  } catch (error) {
    console.error(error);
    res.status(400).send({ error: error.message });
  }
});

module.exports = router;
