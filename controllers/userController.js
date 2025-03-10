const users = require('../models/userModel')
const jwt = require('jsonwebtoken')

exports.registerUserController = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const existingUser = await users.findOne({ email })
        if (existingUser) {
            res.status(401).json("Existing user!!! Please Login to continue")
        } else {
            const newUser = new users({
                username, email, password, profilePic: ""
            })
            await newUser.save()
            res.status(200).json(newUser)
        }
    } catch (err) {
        res.status(404).json("Registration failed")
    }
}

exports.loginUserController = async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await users.findOne({ email, password })
        if (existingUser) {
            const token = jwt.sign({ userid: existingUser._id }, process.env.JWTPASSWORD)
            res.status(200).json({ user: existingUser, token })
        } else {
            res.status(401).json("Incorrect Email/ Password")
        }
    } catch (err) {
        res.status(404).json("Login Failed")
    }
}

exports.updateUserController = async (req, res) => {
    const { username, email, password, profilePic } = req.body;
    const updatedProfilePic = req.file ? req.file.filename : profilePic
    userId = req.userId
    try {
        const updatedUser = await users.findByIdAndUpdate({ _id: userId }, {
            username, email, password, profilePic: updatedProfilePic
        }, { new: true })
        await updatedUser.save()
        res.status(200).json(updatedUser)
    } catch (err) {
        res.status(401).json(err)
    }

}