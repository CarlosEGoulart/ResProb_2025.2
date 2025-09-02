"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.number = void 0;
function number(busStops) {
    // Your Code
    var still = 0;
    for (let i = 0; i < busStops.length; i++) {
        let onBus = busStops[i][0];
        let offBus = busStops[i][1];
        still += onBus;
        still -= offBus;
    }
    return still;
}
exports.number = number;
