const mongoose = require('mongoose')

const historySchema = mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    currentLevels: {
        level: {
            type: Number,
            required: true,
            default:1
        },
        subject: {
            type: Number,
            required: true
        },
        wins: {
            type: Number,
            required: true
        },
        lose:{
            type: Number,
            required: true
        }
    },
    totalGameWin: {
        type: Number,
        default: 0
    },
    totalGameLose: {
        type: Number,
        default: 0 
    }
})

const histories = mongoose.model('histories', historySchema)

module.exports = histories