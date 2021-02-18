const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    jobId: { type: String, required: true, unique: true },
    jobTitle: { type: String, required: true, minlength: 5 },
    jobPostedDate: { type: Date },
    role: { type: String},
    responsibilty: { type: String},
    companyName: { type: String},
    experience: { type: Number},
    salaryRange: { type: Number},
    noOfPositions: { type: Number},
    location: { type: String},
    skills: { type: String},
    degree: { type: String},
    companyInfo: { type: String},
    employmentType: { type: String},
    industryType: { type: String},
    keyword: { type: String},
    description: { type: String},
});

module.exports = Job = mongoose.model('job', jobSchema);