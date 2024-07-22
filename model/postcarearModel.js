const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
const postSchema = new mongoose.Schema({
    location: { type: String, required: true },
    jobpost: { type: String, required: true },
    experience: { type: String, required: true },
    description: { type: String, required: true },
    appliedDate: { type: Date, default: Date.now },
  });
  
  module.exports = mongoose.model('Postcarear', postSchema);

