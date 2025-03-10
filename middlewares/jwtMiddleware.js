const jwt = require('jsonwebtoken')

const jwtMiddleware = (req, res, next) => {
    const token = req.headers['authorization'].split(" ")[1]
    if (token) {
        const jwtResponse=jwt.verify(token,process.env.JWTPASSWORD)
        console.log(jwtResponse);
         req.userId=jwtResponse.userid
        next()
    } else {
        res.status(404).json("Authorization Failed")
    }
}

module.exports = jwtMiddleware