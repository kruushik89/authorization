const jwt = require("jsonwebtoken");

class TokenService {
    generateTokens(payload) {
        //expiresIn - час життя токена
        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, expiresIn: "30m")
    }
}

module.exports = new TokenService();