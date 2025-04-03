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

exports.getTimeGiftController = async (req, res) => {
    console.log("inside getTimeGiftController");
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
