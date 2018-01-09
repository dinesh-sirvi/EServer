require('./configs/config.js');
const express = require('express');
const bodyParser = require('body-parser');
const {mongoose} = require('./mongoose/mongoose');

const app = express();

const {Job} = require('./models/jobs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); 

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', false);
    next();
});
app.post('/job', (req,res)=>{
    var job = new Job({
        job_desc: req.body.job_desc,
        job_position: req.body.job_position,
        qual_required: req.body.qual_required,
        exp_required : req.body.exp_required
    });

    job.save().then((doc)=>{
        res.status(200).send(doc);
      },(error)=>{
        res.status(400).send(error);
      });
});
app.get('/jobs', (req,res)=>{
    Job.find().then((doc)=>{
        res.status(200).send(doc);
    },(error)=>{
        res.status(400).send("Some Error Occurred");    } );
});
app.get('/:id',(req,res)=>{
    var id = req.params.id;
    Job.findOne({_id: id}).then((doc)=>{
        res.status(200).send(doc);
    },(error)=>{
        res.status(400).send({Status:400});
    });
});

app.listen(process.env.PORT, ()=>{
    console.log(`server is up on port ${process.env.PORT}`);
  });