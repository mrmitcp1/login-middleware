import express from "express";
import { LoginController } from "../controller/login.controller";
import { checkLogin } from "../middlewares/checklogin";
export const router = express.Router()

router.post('/login',checkLogin,LoginController.login)