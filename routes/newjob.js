const router=require('express').Router()
const job=require('../models/job')

router.get('/newjob',(req,res)=>{
    res.render('newjob')
})

router.post('/newjob',(req,res)=>{
    const {title,content} = req.body;

    if(!title || !content)
    {
        return res.send("Please enter the required fields")
    }

    const newjob=new job({title,content})
    //Save job
    newjob.save().then(()=>{
        console.log("job Saved")
        res.redirect('/')
    })
    .catch((err)=>{
        console.log(err)
    })

}),

module.exports=router;