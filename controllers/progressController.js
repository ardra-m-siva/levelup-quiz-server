const histories = require("../models/progressModel")

exports.addProgressNowController = async (req, res) => {
    const userId = req.userId
    let { subject, level, isWin } = req.body;
    console.log(level, subject, isWin);

    subject = subject.trim().toLowerCase();

    try {
        let history = await histories.findOne({ userId });

        if (!history) {
            // Create new history if not found
            history = new histories({
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
        } else {

            // Check for existing subject entry
           const subjectIndex = history.subjectProgress.findIndex(
                p => p.subject.trim().toLowerCase() === subject
            );

            if (subjectIndex !== -1) {
                // Update existing
                if (isWin) {
                    history.subjectProgress[subjectIndex].wins += 1;
                    history.subjectProgress[subjectIndex].level = level + 1;
                    history.totalGameWin += 1;
                } else {
                    history.subjectProgress[subjectIndex].lose += 1;
                    history.totalGameLose += 1;
                }
            } else {
                // Add new subject entry
                history.subjectProgress.push({
                    subject,
                    level,
                    wins: isWin ? 1 : 0,
                    lose: isWin ? 0 : 1
                });
                history.totalGameWin += isWin ? 1 : 0;
                history.totalGameLose += isWin ? 0 : 1;
            }
        }
        await history.save();
        res.status(200).json({ message: "Progress updated successfully", result: history });

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

exports.getAllProgressDataDetails = async (req, res) => {
    console.log("inside getAllProgressDataDetails");
    const userId = req.userId;
    try {
        const historyDetails = await histories.findOne({ userId })
        if (historyDetails) {
            res.status(200).json(historyDetails)
        } else {
            res.status(400).json("No Details Found")
        }
    } catch (err) {
        res.status(500).json(err)
    }

}