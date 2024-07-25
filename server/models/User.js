const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  profilepic:{
    type: String,
    default: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1720609500~exp=1720610100~hmac=a2269570a6d44751991cccddc7fa4c77f70b429b4d48a0281a97678725dc7484'
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
  }],
  company:{ 
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company'
   }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
