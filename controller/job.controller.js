const jobModel = require("../model/job.model");

const createjob = (req, res)=>{
    console.log(req.body);
    jobModel.create(req.body);
    res.json({
        success: true,
        message:"create job api"
    });
};

const listjob = async(req,res)=>{
    const jobs = await jobModel.find()
    res.json({
        success: true,
        message:"list job api",
        results:jobs
    });
}

   const editjob = async(req,res)=>{
    console.log(req.body);
    await jobModel.findByIdAndUpdate({
        _id: req.body
    },{
        $set:{
          ...req.body
        }
    })
    res.json({
         success:true,
         message:"edit job api"
    });
}
  const deletejob =async(req,res)=>{
    // await jobModel.deleteOne({_id: req.body.body._id})
    // await jobModel.deleteMany({_id: req.body._id})

    
    await jobModel.findByIdAndDelete(req.body._id)
    res.json({
       success: true,
       message:"Delete job api"
    });
}        

const jobController ={
    createjob,
    listjob,
    editjob,
    deletejob
}
module.exports = jobController;