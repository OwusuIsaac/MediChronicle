const mongoose = require('mongoose');
// const logger = require('../utils/logger');  // Assuming you have a logger utility

const connectDB = async () => {
    const dbOptions = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useFindAndModify: true,
        // useCreateIndex: true,
        // autoIndex: true,  // Don't build indexes on production database
        // // poolSize: 10,  // Maintain up to 10 socket connections
        // serverSelectionTimeoutMS: 3000,  // Keep trying to send operations for 5 seconds
        // socketTimeoutMS: 43000,  // Close sockets after 45 seconds of inactivity
        // family: 4  // Use IPv4, skip trying IPv6
    };

    try {
        await mongoose.connect(process.env.MDB_CONNECT, dbOptions);
        console.log("MongoDB connected...");
    } catch (err) {
        console.log(`MongoDB connection error: ${err.message}`);
        // Exit process with failure
        process.exit(1);
    }

    // Log the MongoDB errors
    mongoose.connection.on('error', err => {
        console.log(`MongoDB error: ${err.message}`);
    });
};

module.exports = connectDB;
