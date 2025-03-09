const mongoose=require('mongoose')

const userScheme=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    profilePic:{
        type:String,
    }
})

const users= mongoose.model('users',userScheme)

module.exports=users