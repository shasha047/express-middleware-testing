"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../../config");
exports.m10 = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    console.log("\nm10 is working ...\n");
    config_1.checkCounter[0] = Math.floor(Math.random() * 10);
    console.log("\ncheckCounter in m10 \n", config_1.checkCounter);
    if (config_1.checkCounter[0] % 10 === 0) {
        config_1.checkCounter[0] = 0;
        console.log("\n*******************\nsuccessfully ends at m10 \n ***************************\n");
        return res.json({
            status: config_1.statusCode.success,
            result: 'chain successfully ends'
        });
    }
    else {
        console.log("\n*******************\nchain break at m10 \n ***************************\n");
        return res.json({
            status: config_1.statusCode.failure,
            result: 'chain break at m10'
        });
    }
});
