const mongoose = require('mongoose');

// Create a schema articleSchema using the mongoose.Schema() method
const articleSchema = mongoose.Schema(
    {
        name: String,
        content: String,
        date: String
    },
    {timestamps: true}
);

// export article schema
module.exports = mongoose.model('article', articleSchema);