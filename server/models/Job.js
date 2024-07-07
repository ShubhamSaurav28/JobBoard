const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true
  },
  companypic:{
    type: String
  },
  jobdesignation: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  tags:{
    type: [String]
  },
  description: {
    type: String,
    required: true
  },
  requirements: {
    type: String
  },
  salary: {
    type: String
  },
  posted: {
    type: Date,
    default: Date.now
  },
  expires: {
    type: Date
  }
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
