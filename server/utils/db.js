const mongoose = require('mongoose')

const URI = process.env.MONGODB_URI;
const connectDb = async () => {
    try {
        await mongoose.connect(URI)
        console.error('DB connection successful');

    } catch (error) {
        console.log(error);

        console.error('DB connection failed');
        process.exit(0)
    }
}

module.exports = connectDb