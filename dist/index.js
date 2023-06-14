"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const web_router_1 = require("./src/routers/web.router");
const PORT = 3333;
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(web_router_1.router);
app.listen(PORT, () => {
    console.log(`App running on port http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map