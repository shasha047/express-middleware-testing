"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const m1_1 = require("./m1");
const m2_1 = require("./m2");
const m3_1 = require("./m3");
const m4_1 = require("./m4");
const m5_1 = require("./m5");
const m6_1 = require("./m6");
const m7_1 = require("./m7");
const m8_1 = require("./m8");
const m9_1 = require("./m9");
const m10_1 = require("./m10");
exports.routerV1 = express_1.Router();
exports.routerV1.get('/', (req, res) => {
    res.json({ "status": 200, "data": "hey now m real node api" });
});
exports.routerV1.get('/checkMiddleware', m1_1.m1, m2_1.m2, m3_1.m3, m4_1.m4, m5_1.m5, m6_1.m6, m7_1.m7, m8_1.m8, m9_1.m9, m10_1.m10);
