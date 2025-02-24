const mongoose = require("mongoose");
const schema = mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    article: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Article',
        required: true,
    }
});
const Comment = mongoose.model('Comment', schema);
// let commentSchema = mongoose.model("comment", schema);
module.exports =  Comment;

