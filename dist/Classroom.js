"use strict";
//Carlos Eduardo Goulart Oliveira
//Nicolas Siqueira Moraes
Object.defineProperty(exports, "__esModule", { value: true });
class Classroom {
    constructor(students) {
        this.students = [];
        this.students = students;
    }
    absent(assing) {
        let missing = [];
        for (let i = 0; i < this.students.length; i++) {
            if (!assing.includes(this.students[i])) {
                missing.push(this.students[i]);
            }
        }
        return missing.sort();
    }
}
exports.default = Classroom;
let monday = new Classroom(['bart', 'lisa', 'maggie']);
console.log(monday.absent(['maggie', 'lisa']));
