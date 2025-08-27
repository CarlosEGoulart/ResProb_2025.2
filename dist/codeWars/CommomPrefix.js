"use strict";
function longestCommonPrefix(strs) {
    let letra = 0;
    let output = '';
    let igual = 0;
    console.log(strs[0].length);
    for (let x = 0; x < strs[0].length; x++) {
        for (let i = 0; i < (strs.length - 1); i++) {
            if (strs[i][letra] === strs[(i + 1)][letra]) {
                igual++;
            }
            else {
                return output;
            }
        }
        if (igual === strs.length - 1) {
            output += strs[0][letra];
        }
        igual = 0;
        letra++;
    }
    return output;
}
;
