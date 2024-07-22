const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
const BlogSChema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
      trim: true,
    },
    img: {
      type: String,
      require: true,
    },
    author: {
      type: String,
      required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  });

//Export the model
module.exports = mongoose.model('Blog', BlogSChema);