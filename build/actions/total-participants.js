"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.totalParticipants = void 0;
const _1 = require("./");
function totalParticipants() {
    const response = (0, _1.obtainParticipants)();
    return response.length;
}
exports.totalParticipants = totalParticipants;
