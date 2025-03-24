const mongoose = require('mongoose')

const streakSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true
    },
    currentStreak: {
        type: Number,
        default: 0
    },
    longestStreak: {
        type: Number,
        required: true,
        default: 0
    },
    lastActiveDate: {
        type: Date,
        required: true,
        default:null
    },
})

const streaks = mongoose.model('streaks', streakSchema)

module.exports = streaks