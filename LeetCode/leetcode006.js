// https://leetcode.com/problems/zigzag-conversion/

function main (s, numRows) {
    if (numRows == 1) {
        return s
    }
    let rows = []
    for (x = 0; x < Math.min(numRows, s.length); x++) {
        rows[x] = ""
    }
    let index = 0, step = 1
    for (y = 0; y < s.length; y++) {
        rows[index] += s[y]
        if (index === 0) {
            step = 1;
        } else if (index === numRows - 1) {
            step = -1;
        }
        index += step;
    }
    return rows.join("");
}

let test = main("PAYPALISHIRING", 3)
console.log(test)