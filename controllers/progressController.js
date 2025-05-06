const histories = require("../models/progressModel")

exports.addProgressNowController = async (req, res) => {
    const userId = req.userId
    const { subject, level, isWin } = req.body;
    console.log(level, subject,isWin);
    try {
        
        const history = await histories.findOne({ userId });
        if (history){
            const existingSubject = history.subjectProgress.find(p => p.subject == subject);
            if (existingSubject) {
                // Update existing subject progress
                if (isWin) {
                    existingSubject.wins += 1;
                    existingSubject.level = level+1;
                    history.totalGameWin += 1;
                } else {
                    existingSubject.lose += 1;
                    history.totalGameLose += 1;
                }
            }else{
                history.subjectProgress.push({
                    subject,
                    level,
                    wins: isWin ? 1 : 0,
                    lose: isWin ? 0 : 1
                });
                history.totalGameWin += isWin ? 1 : 0;
                history.totalGameLose += isWin ? 0 : 1
            }
            await history.save();
            res.status(200).json({ message:"Progress updated successfully",result: history });
        }else {
            // If no history, create a new one
            const newHistory = new histories({
                userId,
                subjectProgress: [{
                    subject,
                    level,
                    wins: isWin ? 1 : 0,
                    lose: isWin ? 0 : 1
                }],
                totalGameWin: isWin ? 1 : 0,
                totalGameLose: isWin ? 0 : 1
            });
            await newHistory.save();
            res.status(200).json({ message:"Progress data added successfully ",result: newHistory });
        } 
    } catch (err) {
        res.status(404).json(err)
    }
}

exports.getProgressForSubject = async (req, res) => {
    const userId = req.userId;
    const { subject } = req.query;

    try {
        const history = await histories.findOne({ userId });
        if (history) {
            const subjectData = history.subjectProgress.find(p => p.subject === subject);
            if (subjectData) {
                return res.status(200).json({ level: subjectData.level });
            }
        }
        res.status(200).json({ level: 1 }); // Default level
    } catch (err) {
        res.status(500).json({ message: "Error fetching progress", error: err });
    }
};