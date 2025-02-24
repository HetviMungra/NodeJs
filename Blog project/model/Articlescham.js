const mongoose = require("mongoose");
const schema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    comments: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Comment',
        required: true
    }
});
const Article = mongoose.model('Article', schema);

// let articleSchema  = mongoose.model("article", schema);
module.exports = Article ;

