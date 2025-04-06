const histories =require("../models/progressModel")

exports.addProgressNowController=(req,res)=>{
    const id = req.userId
    try{
        
    }catch(err){
        res.status(404).json(err)
    }
}