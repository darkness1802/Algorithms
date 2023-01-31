// https://leetcode.com/problems/median-of-two-sorted-arrays/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

function main(nums1, nums2) {
    let m = nums1.length, n = nums2.length;
    if (m > n) {
        [nums1, nums2] = [nums2, nums1];
        [m, n] = [n, m];
    }
    let imin = 0, imax = m, halfLen = Math.floor((m + n + 1) / 2);
    while (imin <= imax) {
        let i = Math.floor((imin + imax) / 2);
        let j = halfLen - i;
        if (i < m && nums2[j-1] > nums1[i]) {
            imin = i + 1;
        } else if (i > 0 && nums1[i-1] > nums2[j]) {
            imax = i - 1;
        } else {
            let maxLeft = 0;
            if (i === 0) {
                maxLeft = nums2[j-1];
            } else if (j === 0) {
                maxLeft = nums1[i-1];
            } else {
                maxLeft = Math.max(nums1[i-1], nums2[j-1]);
            }
            if ((m + n) % 2 === 1) {
                return maxLeft;
            }
            let minRight = 0;
            if (i === m) {
                minRight = nums2[j];
            } else if (j === n) {
                minRight = nums1[i];
            } else {
                minRight = Math.min(nums1[i], nums2[j]);
            }
            return (maxLeft + minRight) / 2;
        }
    }
    return 0;
}

let res = main([0, 0], [0, 0])
console.log(res)