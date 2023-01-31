// https://leetcode.com/problems/longest-substring-without-repeating-characters/

/**
 * Đề bài: Cho một chuỗi s, tìm độ dài của chuỗi dài nhất chuỗi con không lặp lại ký tự.
 * @param {string} s example: "abcabcbb"
 * */

var lengthOfLongestSubstring = function(s) {
    let charMap = {}
    let start = 0
    let maxLen = 0

    for (let i = 0; i< s.length; i++) {
        let char = s[i]
        if (charMap[char] >= start) {
            start = charMap[char] + 1
        }
        charMap[char] = i
        maxLen = Math.max(maxLen, i - start + 1)
    }
    return maxLen
}