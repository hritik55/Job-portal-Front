const router = require('express').Router();
const Job = require('../models/jobModel');
const auth = require('../middleware/auth');
const ObjectID = require('mongoose').Types.ObjectId;

router.post('/addJobs', async (req, res) => {
    try {
        const { jobId, jobTitle, jobPostedDate,
            role, responsibilty, companyName,
            experience, salaryRange, noOfPositions,
            location, skills, degree, companyInfo,
            employmentType, industryType, keyword,
            description } = req.body;

        const newJob = new Job({
            jobId, jobTitle, jobPostedDate,
            role, responsibilty, companyName,
            experience, salaryRange, noOfPositions,
            location, skills, degree, companyInfo,
            employmentType, industryType, keyword,
            description
        });

        const savedJob = await newJob.save();
        res.json(savedJob);
    } catch (err) {
        res.status(500).json({ error: err.message})
    }
});

router.get('/', async (req, res) => {
    try {
        const allJobs =  Job.find((err, docs) => {
            if(!err) res.json(docs)
        });
    } catch (err) {
        res.status(500).json({ error: err.message})
    }
});

router.put('/:id', (req, res) => {
    try {
        const { jobId, jobTitle, jobPostedDate,
        role, responsibilty, companyName,
        experience, salaryRange, noOfPositions,
        location, skills, degree, companyInfo,
        employmentType, industryType, keyword,
        description } = req.body;
        
        const updatedJob = {
            jobId, jobTitle, jobPostedDate,
            role, responsibilty, companyName,
            experience, salaryRange, noOfPositions,
            location, skills, degree, companyInfo,
            employmentType, industryType, keyword,
            description
        }

        Job.findByIdAndUpdate(req.params.id, { $set : updatedJob },
            {new: true}, (err, doc) =>{
            if(!err)
                res.send(doc)
        })
    } catch (err) {
        res.status(500).json({ error: err.message})
    }
    
});

router.delete('/:id', (req, res) => {
    try {
        if(!ObjectID.isValid(req.params.id))
            return res.status(400)
                    .send(`No records with id: ${req.params.id}`)
        Job.findByIdAndRemove(req.params.id, (err, doc) => {
            if(!err) res.send(doc)
        })
    } catch (err) {
        res.status(500).json({ error: err.message})
    }
});

module.exports = router;