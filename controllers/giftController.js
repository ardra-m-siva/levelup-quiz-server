const levelgifts = require('../models/gameUpGiftModel')

// add giift to a person
exports.addTimeGiftController = async (req, res) => {
    console.log("inside addTimeGiftController");
    const id = req.userId
    try {
        const existingUser = await levelgifts.findOne({ userId: id })
        if (existingUser) {
            existingUser.addOnTime += 1
            existingUser.save()
            res.status(201).json(existingUser)
        } else {
            let newGift = new levelgifts({
                userId: id, addOnTime: 1
            })
            await newGift.save()
            res.status(200).json(newUser)
        }
    } catch (err) {
        res.status(404).json(err)
    }
}

exports.addSkipQuestionGiftController = async (req, res) => {
    console.log("inside addSkipQuestionGiftController");
    const id = req.userId
    try {
        const existingUser = await levelgifts.findOne({ userId: id })
        if (existingUser) {
            existingUser.skipQuestion += 1
            existingUser.save()
            res.status(201).json(existingUser)
        } else {
            let newGift = new levelgifts({
                userId: id, skipQuestion: 1
            })
            await newGift.save()
            res.status(200).json(newUser)
        }
    } catch (err) {
        res.status(404).json(err)
    }
}

exports.addHintGiftController = async (req, res) => {
    console.log("inside addReverseTimeGiftController");
    const id = req.userId
    try {
        const existingUser = await levelgifts.findOne({ userId: id })
        if (existingUser) {
            existingUser.hint += 1
            existingUser.save()
            res.status(201).json(existingUser)
        } else {
            let newGift = new levelgifts({
                userId: id, hint: 1
            })
            await newGift.save()
            res.status(200).json(newUser)
        }
    } catch (err) {
        res.status(404).json(err)
    }
}

exports.addPauseTimeGiftController = async (req, res) => {
    console.log("inside addPauseTimeGiftController");
    const id = req.userId
    try {
        const existingUser = await levelgifts.findOne({ userId: id })
        if (existingUser) {
            existingUser.pauseTime += 1
            existingUser.save()
            res.status(201).json(existingUser)
        } else {
            let newGift = new levelgifts({
                userId: id, pauseTime: 1
            })
            await newGift.save()
            res.status(200).json(newUser)
        }
    } catch (err) {
        res.status(404).json(err)
    }
}

// get if a person have any gidts

exports.getAllGiftsController = async (req, res) => {
    console.log("inside getAllGiftsController");
    const id = req.userId
    try {
        const existingUser = await levelgifts.findOne({ userId: id })
        if(existingUser){
            res.status(200).json(existingUser)
        }
    } catch (err) {
        res.status(404).json(err)
    }
}

// remove giift to a person
exports.removeAddTimeGiftController = async (req, res) => {
    console.log("inside removeTimeGiftController");
    const id = req.userId
    try {
        const existingUser = await levelgifts.findOne({ userId: id })
        if (existingUser.addOnTime>0) {
            existingUser.addOnTime -= 1
            existingUser.save()
            res.status(201).json(existingUser)
        }
    } catch (err) {
        res.status(404).json(err)
    }
}

exports.removeSkipQuestionGiftController = async (req, res) => {
    console.log("inside removeSkipQuestionGiftController");
    const id = req.userId
    try {
        const existingUser = await levelgifts.findOne({ userId: id })
        if (existingUser.skipQuestion>0) {
            existingUser.skipQuestion -= 1
            existingUser.save()
            res.status(201).json(existingUser)
        }
    } catch (err) {
        res.status(404).json(err)
    }
}

exports.removeHintGiftController = async (req, res) => {
    console.log("inside removeHintGiftController");
    const id = req.userId
    try {
        const existingUser = await levelgifts.findOne({ userId: id })
        if (existingUser.hint>0) {
            existingUser.hint -= 1
            existingUser.save()
            res.status(201).json(existingUser)
        }
    } catch (err) {
        res.status(404).json(err)
    }
}

exports.removePauseTimeGiftController = async (req, res) => {
    console.log("inside removePauseTimeGiftController");
    const id = req.userId
    try {
        const existingUser = await levelgifts.findOne({ userId: id })
        if (existingUser.pauseTime>0) {
            existingUser.pauseTime -= 1
            existingUser.save()
            res.status(201).json(existingUser)
        }
    } catch (err) {
        res.status(404).json(err)
    }
}