const mongoose = require('mongoose')
const { Schema } = mongoose;

const BlogSchema = new Schema({
    title:  String, 
    author: String,
    body:   String,
    hidden: Boolean,

});

module.exports = mongoose.model('Blog', BlogSchema)