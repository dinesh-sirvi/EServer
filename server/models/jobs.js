const mongoose = require('mongoose');
const mongodb = require('mongodb');


var jobSchema = new mongoose.Schema({
    job_desc:{
        type:String,
        trim: true,
        minLength:1
    },
    job_position: {
        type:String,
        minLength:1
    },
    qual_required : {
        type:String,
        minLength:1
    },
    exp_required:{
        type:String,
        minLength: 1
    }
});

var Job= mongoose.model('job',jobSchema);
module.exports = {Job};