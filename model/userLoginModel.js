const mongoose = require('mongoose'); // Erase if already required

const userSchem = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
  });

  module.exports = mongoose.model('Users', userSchem);