const { expressjwt: jwt } = require("express-jwt");
const { jwtSecret } = require("../src/config.js");

const authMiddleware = jwt({
    secret: jwtSecret,
    algorithms: ["HS256"]
});

module.exports = authMiddleware;