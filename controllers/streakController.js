const streaks = require('../models/streakModel')

exports.addStreakController = async (req, res) => {
    console.log("inside addStreakController");
    const userId = req.userId    
    try {
        const existingUser = await streaks.findOne({ userId })  
              
        if (!existingUser) {
            const newUser = new streaks({
                userId, currentStreak: 1, longestStreak: 1, lastActiveDate: new Date()
            })
            await newUser.save()
            return res.status(200).json(newUser)
        } else {
            const today = new Date().toISOString().split("T")[0]
            const lastActive = existingUser.lastActiveDate.toISOString().split("T")[0]
            if (today == lastActive) {
                return res.status(400).json("Already updated")
            }else if ((new Date(today) - new Date(lastActive)) / (1000 * 60 * 60 * 24)===1) {
                existingUser.currentStreak+=1
                if(existingUser.currentStreak>existingUser.longestStreak){
                    existingUser.longestStreak=existingUser.currentStreak
                }
            }else{
                existingUser.currentStreak=1
            }
            existingUser.lastActiveDate=new Date()
        }
        await existingUser.save()
        return res.status(201).json(existingUser)
    } catch (err) {
        return  res.status(500).json(err)
    }
}

exports.getStreakController=async(req,res)=>{
    console.log("inside addStreakController");
    const userId = req.userId    
    try {
        const existingUser = await streaks.findOne({ userId })
        res.status(200).json(existingUser)
    }catch(err){
      res.status(500).json(err)
  
    }
}