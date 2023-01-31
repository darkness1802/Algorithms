// https://leetcode.com/problems/string-to-integer-atoi/

function main (s) {
    let temp = s.trim()
    if (Number(temp)) {
        return temp
    } else {
        let result = temp.match(/\d/g)
        return result
    }
}

let test = main("   -421qaa")
console.log(test)