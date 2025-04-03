const mongoose=require('mongoose')

const gameUpScheme=mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    skipQuestion:{
        type:Number,
        default: 0
    },
    addOnTime:{
        type:Number,
        default: 0
    },
    pauseTime:{
        type:Number,
        default: 0
    },
    hint:{
        type:Number,
        default: 0
    }
})

const levelgifts= mongoose.model('levelgifts',gameUpScheme)

module.exports=levelgifts