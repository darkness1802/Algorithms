// Longest Palindromic Substring
// https://leetcode.com/problems/longest-palindromic-substring/submissions/874614384/

function longestPalindrome (s) {
    let res = ""
    let lengthOfRes = 0

    for (let i = 0; i < s.length; i ++) {

        let [left, right] = [i, i]
        
        while (left >= 0 && right < s.length && s[left] == s[right]) {
            if ((right - left + 1) > lengthOfRes) {
                console.log(left, right)
                res = s.slice(left, right + 1)
                lengthOfRes = right - left + 1
            }
            left -= 1
            right += 1
        }
        left = i
        right = i + 1
        while (left >= 0 && right < s.length && s[left] == s[right]) {
            if ((right - left + 1) > lengthOfRes) {
                console.log(left, right)
                res = s.slice(left, right + 1)
                lengthOfRes = right - left + 1
            }
            left -= 1
            right += 1
        }
    }
    return res
}

let aaa = longestPalindrome ("babad")
console.log("Result:", aaa)