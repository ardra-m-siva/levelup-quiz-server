const express = require('express')
const userController = require('../controllers/userController')
const jwtMiddleware = require('../middlewares/jwtMiddleware')
const multerMiddleware = require('../middlewares/multerMiddleware')
const streakController =require('../controllers/streakController')
const router = express.Router()
const axios=require('axios')

router.post('/register', userController.registerUserController)

router.post('/login', userController.loginUserController)

//  jwt middleware is not used anywhere now 
router.put('/update', jwtMiddleware,multerMiddleware.single("profilePic"), userController.updateUserController)
// api to fetch the questions

router.get('/api/questions',async (req, res) => {
    try {
        const { difficulty, subject } = req.query;
        const response = await axios.get(`https://quizapi.io/api/v1/questions`, {
            params: { limit: 10, difficulty, tags:subject },
            headers: {
                "Content-Type": "application/json",
                "X-Api-Key": process.env.API_KEY  // Hidden from frontend
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ message: "Error fetching questions", error: error.message });
    }
})

router.post('/streak', jwtMiddleware, streakController.addStreakController)
router.get('/get-streak', jwtMiddleware, streakController.getStreakController)

module.exports = router