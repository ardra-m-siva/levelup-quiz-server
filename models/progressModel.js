const mongoose = require('mongoose')

const historySchema = mongoose.Schema({
    currentLevels: {
        level: {
            type: Number,
            required: true
        },
        subject:{
            type: Number,
            required: true
        }
    },
    userId: {
        type: String,
        required: true
    },
    gameWin: {
        type: Number,
        default: 0
    },
    gameLose: {
        type: Number,
        default: 0
    },
    totalGames: {
        type: Number,
        default: function () { return this.gameWin + this.gameLose; }
    },
    lastPlayedAt: {
        type: Date,
        default: Date.now
    }
})

const histories = mongoose.model('histories', historySchema)

module.exports = histories