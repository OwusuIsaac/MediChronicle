const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 3001; // Make sure this does not conflict with your React app's port

// Body parsing middleware to parse JSON
app.use(express.json());
app.use(cors());

// MongoDB connection string, replace '<password>', '<username>', and '<dbname>' with your actual details
const mongoURI =
  "mongodb+srv://admin:mediadmin@cluster0.3qsyp1b.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Connect to MongoDB
mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Routes
// Ensure that the userRoutes are implemented in './routes/users'
const userRoutes = require("./routes/users"); // Make sure the path to your routes is correct
app.use("/api/users", userRoutes);

const medicalRoutes = require("./routes/medicalEntry"); // Adjust this path to where you store your routes
app.use("/api/medical-entries", medicalRoutes); // Use your medical routes

app.use("/uploads", express.static("uploads"));

app.use("/docs", express.static("docs"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
