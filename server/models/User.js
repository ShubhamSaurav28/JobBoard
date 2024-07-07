const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  profilepic:{
    type: String
  },
  designation:{
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  description:{
    type:String
  },
  password: {
    type: String,
    required: true
  },
  dob: {
    type: Date
  },
  totalexp:{
    type: Number
  },
  experience: [{
    company: {
      type: String
    },
    designation: {
      type: String
    },
    yearofexp: {
      type: Number
    }
  }],
  phone: {
    type: String
  },
  location: {
    type: String
  },
  resume: {
    type: String //file
  },
  skills: {
    type: [String]
  },
  education: [{
    institute: {
      type: String
    },
    degree: {
      type: String
    },
    year: {
      type: Number
    }
  }]
});

const User = mongoose.model('User', userSchema);

module.exports = User;
