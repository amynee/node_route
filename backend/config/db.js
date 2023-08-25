// Load mongoose module
const mongoose = require("mongoose");

// configure database connection
const connectDB = async () => {
    mongoose.set('strictQuery', false);
    await mongoose.connect(process.env.MONGO_URI, { 
        // Avoid DeprecationWarning
        useNewUrlParser: true,
        useUnifiedTopology: true 
    }).then(() => {
        console.log('MongoDB connected successfully');
    }).catch((error) => {
        console.log('Error while connecting to bd', error);
        process.exit();
    })
}

module.exports = connectDB;