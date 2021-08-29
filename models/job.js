const mongoose=require('mongoose')

const JobSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    dateTime:{
        type:String,
        default:new Date().toString()
    }
})

module.exports=new mongoose.model('Job',JobSchema);