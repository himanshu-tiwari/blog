const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required']
    },
    contents: {
        type: String
    }
});

module.exports = mongoose.model('blog', BlogSchema);