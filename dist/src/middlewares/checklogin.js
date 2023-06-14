"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkLogin = void 0;
const checkLogin = async (req, res, next) => {
    let { username, password } = req.body;
    if (username === 'viet' && password === 'viet') {
        console.log(`${username} is admin`);
        next();
    }
    else {
        res.status(401).json({
            message: 'fail to login'
        });
    }
};
exports.checkLogin = checkLogin;
//# sourceMappingURL=checklogin.js.map