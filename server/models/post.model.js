const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Post = new Schema ({
    id: { type: 'String', requied: true },
    title: { type: 'String', required: true },
    content: { type: 'String', required: true },
    author: { type: 'String', required: true },
});

module.exports = mongoose.model('Post', Post);