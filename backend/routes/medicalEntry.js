const express = require("express");
const multer = require("multer");
const { body, validationResult } = require("express-validator");

const MedicalEntry = require("../models/MedicalEntry"); // adjust the path as necessary

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => cb(null, "./uploads"),
    filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`),
  }),
});

const router = express.Router();

router.post(
  "/add-entry",
  upload.array("attachments"),
  [
    body("patientName").not().isEmpty().trim().escape(),
    // Add more validators as needed
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const entryData = {
        ...req.body,
        prescription: req.body.prescription || [],
        attachments: req.files.map((file) => file.path),
      };

      const newEntry = new MedicalEntry(entryData);
      await newEntry.save();
      res.status(201).send({ message: "Medical entry added successfully!" });
    } catch (error) {
      console.error(error);
      res.status(400).send({ error: error.message });
    }
  }
);

// New route to fetch entries for a specific patient
router.get("/", async (req, res) => {
  try {
    const { patientName } = req.query;
    if (!patientName) {
      return res.status(400).json({ message: "Patient name is required" });
    }
    const entries = await MedicalEntry.find({ patientName: patientName });
    res.json(entries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
