"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Three = /** @class */ (function () {
    function Three(a, b, c) {
        this.a = b;
        this.b = b;
        this.c = c;
    }
    Three.prototype.ordenThree = function () {
        var biggest = 0;
        var medium = 0;
        var smallest = 0;
        if (this.a > this.b && this.a > this.c) {
            biggest = this.a;
            medium = this.b;
            smallest = this.c;
        }
        if (this.b > this.a && this.b > this.c) {
            biggest = this.b;
            medium = this.a;
            smallest = this.c;
        }
        if (this.c > this.a && this.c > this.b) {
            biggest = this.c;
            medium = this.a;
            smallest = this.b;
        }
        console.log("".concat(smallest, ", ").concat(medium, ", ").concat(biggest));
    };
    return Three;
}());
exports.default = Three;
var test = new Three(3, 5, 19);
test.ordenThree();
