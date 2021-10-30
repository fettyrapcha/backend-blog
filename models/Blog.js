const mongoose = require('mongoose')
const { Schema } = mongoose;

const BlogSchema = new Schema({
    title:  String, 
    author: String,
    body:   String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    hidden: Boolean,

});

module.exports = mongoose.model('Blog', BlogSchema)