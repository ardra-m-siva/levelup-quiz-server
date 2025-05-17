
const AuthenticationMiddleware = (req, res, next) => {
    const authHeader = req.headers.Authorization
    console.log(authHeader);

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }
}

module.exports = AuthenticationMiddleware;
