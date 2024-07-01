const mongoose = require('mongoose')

const connectDb = async () => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/mern_admin')
        console.error('DB connection successful');

    } catch (error) {
        console.error('DB connection failed');
        process.exit(0)
    }
}

module.exports = connectDb