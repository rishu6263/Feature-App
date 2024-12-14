const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  degree: { type: String, required: true },
  specialization: { type: String, required: true },
  description: { type: String },
});

module.exports = mongoose.model('Doctor', doctorSchema);
