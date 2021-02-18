const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    profileid: { type: String, required: true },
    name: { type: String},
    email: { type: String, required: true, unique: true },
    mobileno: { type: String },
    address: { 
        add_string1: { type: String },
        add_string2: { type: String },
        country: { type: String },
        state: { type: String },
        city: { type: String },
        postalcode: { type: String }
     },
     workexperience: { 
         years: { type: Number },
         months: { type: Number } 
     },
    skills: { type: String },
    college: { type: String },
    graduated: { type: Boolean, default: false},
    yearofgraduation: { type: Number },
    noofyearsattended: { type: Number},
    skills: { type: String },
    certification: { type: String }, 
    savedJobs: [String],
    appliedJobs: [String]
});

module.exports = Profile = mongoose.model('profiles', profileSchema);