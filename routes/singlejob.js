const router=require('express').Router()
const job=require('../models/job')

router.get('/singlejob/:id',async(req,res)=>{
    const {id}=req.params;
    const getjob=await job.findOne({_id:id});
    res.render('detailjob',{job: getjob});
});

router.get('/delete/:id',(req,res)=>{

    const {id}=req.params;

    job.deleteOne({_id:id})
    .then(()=>{
        console.log("job Deleted")
        res.redirect('/')
    })
    .catch((err)=>console.log(err));
});


router.get('/edit/:id',async(req,res)=>{

    const {id}=req.params;

    const getjob=await job.findOne({_id:id});
    res.render('editjob',{job: getjob});
});

router.post('/edit/:id',(req,res)=>{

    const {id}=req.params;
    const {title,content}=req.body;

    job.updateOne({_id:id},{title,content})
    .then(()=>{
        console.log("job Updated")
        res.redirect('/')
    })
    .catch((err)=>console.log(err));
});

module.exports=router;