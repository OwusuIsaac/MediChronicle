const express = require('express');
const cors = require('cors');
const helmet = require('helmet');  // Provides security headers to protect from some well-known web vulnerabilities
const morgan = require('morgan');  // HTTP request logger middleware
const connectDB = require('./config/db');
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const medicalRecordsRoutes = require('./routes/medicalRecords');
// const { errorHandler, notFound } = require('./middleware/errorMiddleware'); // Custom error handling middleware

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(cors());
app.use(helmet());
app.use(morgan('tiny'));
app.use(express.json()); // for parsing application/json

// Routes
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/records', medicalRecordsRoutes);

// Custom error handling
// app.use(notFound);  // Handle 404 errors
// app.use(errorHandler);  // Catch and process errors

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
