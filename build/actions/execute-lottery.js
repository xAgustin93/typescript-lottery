"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeLottery = void 0;
const lodash_1 = require("lodash");
const _1 = require("./");
function executeLottery(winners = 1) {
    const participants = (0, _1.obtainParticipants)();
    //   const indexWinner = (Math.random() * participants.length) | 0;
    //   const winner = participants[indexWinner];
    const result = (0, lodash_1.sampleSize)(participants, winners);
    return result;
}
exports.executeLottery = executeLottery;
