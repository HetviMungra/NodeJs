const mongoose = require("mongoose");

const schema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: { 
        type: String,
         enum: ['admin', 'user'], 
         default: 'user'
    }
});

schema.virtual('articles', {
    ref: 'Article', 
    localField: '_id', 
    foreignField: 'author' 
});

const User = mongoose.model('User', schema);
module.exports = User;