"use strict";
function likes(names) {
    // TODO
    if (names.length === 0) {
        return "no one likes this";
    }
    if (names.length === 1) {
        return names[0] + " likes this";
    }
    if (names.length > 3) {
        return names[0] + ", " + names[1] + " and " + (names.length - 2) + " others like this";
    }
    let separatedNames = names.slice(0, -1).join(", ");
    let lastName = names[names.length - 1];
    return separatedNames + " and " + lastName + " like this";
}
