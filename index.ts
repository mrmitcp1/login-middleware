import express from "express";
import path from "path";
import bodyParser from "body-parser";
import {router} from './src/routers/web.router'
const PORT = 3333;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(router)
app.listen(PORT, ()=>{
    console.log(`App running on port http://localhost:${PORT}`) 

})