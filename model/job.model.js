const mongoose = require('mongoose');


const jobSchema = new mongoose.Schema({
    title: {
        type: String
    },
    location: {
        type: String
    },
    salary: {
        type: Number
    },
    company: {
        type: String
    },
    skills: {
        type: [String]   
    }
});

const jobModel = mongoose.model("job",jobSchema)

module.exports = jobModel;


