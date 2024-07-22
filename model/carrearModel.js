const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
const careerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    number: { type: String, required: true },
    appliedPosition: { type: String, required: true },
    description: { type: String, required: true },
    appliedDate: { type: Date, default: Date.now },
  });

  module.exports  = mongoose.model('Career', careerSchema);

