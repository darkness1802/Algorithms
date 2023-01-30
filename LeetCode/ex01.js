// https://leetcode.com/problems/two-sum/

/**
 * Đề bài: tìm vị trí của 2 số nguyên với điều kiện tổng 2 số đó = với target
 * @param {*} num : mảng số nguyên
 * @param {number} target : số nguyên
 * num = [2,7,11,15]
 * target = 9
 */

var twoSum = function (num, target) {

    let map = {}
    for (let i = 0; i < num.length; i ++) {
        let x = target - num[i]
        if (map[x] && map[x] !== i) {
            return [i, map[x]]
        }
        map[num[i]] = i
    }
}
