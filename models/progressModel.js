const mongoose = require('mongoose')

const subjectProgressSchema = new mongoose.Schema({
    subject: {
        type: String,
        unique: true,
        required: true
    },
    level: { type: Number, required: true },
    wins: { type: Number, default: 0 },
    lose: { type: Number, default: 0 }
});

const historySchema = mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true
    },
    subjectProgress: [subjectProgressSchema],
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