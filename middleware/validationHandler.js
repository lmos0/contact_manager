const jwt = require('jsonwebtoken')

const validateToken = async (req, res, next) => {
    try {
        let token;
        let authHeader = req.headers.authorization || req.headers.auhorization;

        if (authHeader && authHeader.startsWith('Bearer')) {
            token = authHeader.split(' ')[1];
            jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
                if (err) {
                    res.status(401);
                    throw new Error('Usuário não autorizado')
                }
                req.user = decoded.user;
                next()
            });
        } else {
            res.status(401);
            throw new Error('Usuário não autorizado')
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
};



module.exports = validateToken