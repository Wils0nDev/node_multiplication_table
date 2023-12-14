"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.yarg = void 0;
const yargs_1 = __importDefault(require("yargs"));
//yargs y opciones de yargs
exports.yarg = (0, yargs_1.default)(process.argv)
    .options('b', {
    alias: 'base',
    type: 'number',
    demandOption: true,
    describe: 'Multiplacation table base'
})
    .options('l', {
    alias: 'limit',
    type: 'number',
    default: 10,
    describe: 'Multiplacation table base'
})
    .parseSync();
