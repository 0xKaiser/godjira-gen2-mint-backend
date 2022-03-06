const mongoose =require('mongoose');

const privatelistSchema = new mongoose.Schema({
    address: {
        type: String,
        unique: true,
    },
    signature: String,
})

module.exports = mongoose.model('privatelistSchema', privatelistSchema)
