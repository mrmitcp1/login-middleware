"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const login_controller_1 = require("../controller/login.controller");
const checklogin_1 = require("../middlewares/checklogin");
exports.router = express_1.default.Router();
exports.router.post('/login', checklogin_1.checkLogin, login_controller_1.LoginController.login);
//# sourceMappingURL=web.router.js.map