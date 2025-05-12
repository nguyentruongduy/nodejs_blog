const mongoose = require('mongoose');

async function connect() {
    try {
        const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/f8_education_dev';
        await mongoose.connect(MONGODB_URI); 
        console.log('Connect successfully!!!');
    } catch (error) {
        console.log('Connect failure!!!', error);
    }
}

module.exports = { connect };