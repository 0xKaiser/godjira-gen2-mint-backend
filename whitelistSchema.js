const mongoose =require('mongoose');

const whitelistSchema = new mongoose.Schema({
    address: {
        type: String,
        unique: true,
    },
    signature: String,
})

module.exports = mongoose.model('whitelistSchema', whitelistSchema)
