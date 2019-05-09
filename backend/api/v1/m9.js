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
exports.m9 = (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    console.log("\nm9 is working ...\n");
    config_1.checkCounter[0] = Math.floor(Math.random() * 10);
    console.log("\ncheckCounter in m9 \n", config_1.checkCounter);
    if (config_1.checkCounter[0] % 10 === 9) {
        console.log("\n*******************\nchain break at m9 \n ***************************\n");
        return res.json({
            status: config_1.statusCode.failure,
            result: 'chain break at m9'
        });
    }
    else {
        next();
    }
});
