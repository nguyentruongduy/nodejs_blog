const mongoose = require('mongoose');

async function connect() {
    try {
        const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://duy:123@cluster1.t4rtr1f.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1';
        await mongoose.connect(MONGODB_URI); 
        console.log('Connect successfully!!!');
    } catch (error) {
        console.log('Connect failure!!!', error);
    }
}

module.exports = { connect };