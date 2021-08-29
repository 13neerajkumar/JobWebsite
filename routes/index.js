const router=require('express').Router()
const job = require('../models/job')


router.get('/',async(req,res)=>{

    const alljobs=await job.find();
   // console.log(alljobs);
    res.render('index',{jobs:alljobs})
})

module.exports=router;