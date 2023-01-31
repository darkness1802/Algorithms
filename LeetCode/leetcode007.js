// https://leetcode.com/problems/reverse-integer/

// Đảo nhược số nguyên
function main (x) {
    let result = 0
    while (x !== 0) { // Mỗi lần lặp sẽ laasy đi số cuối
        let last = x % 10
        x = (x - last) / 10
        if (result > 2147483647/10 || (result === 2147483647 / 10 && last > 7)) return 0
        if (result < -2147483648/10 || (result === -2147483648 / 10 && last < -8)) return 0
        result = result * 10 + last
    }
    return result
}