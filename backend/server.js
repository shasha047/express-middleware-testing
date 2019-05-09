"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path = __importStar(require("path"));
const v1_1 = require("./api/v1/v1");
const http_1 = __importDefault(require("http"));
const config_1 = require("./config");
const app = express_1.default();
const server = new http_1.default.Server(app);
app.use(express_1.default.static(path.join(config_1.__root, '../public/dist')));
app.use('/api/v1/', v1_1.routerV1);
app.use((req, res) => {
    res.sendFile(path.join(config_1.__root, "../public", "dist", "index.html"));
});
server.listen(config_1.node_port, () => {
    console.log("server up and running on port" + config_1.node_port);
});
