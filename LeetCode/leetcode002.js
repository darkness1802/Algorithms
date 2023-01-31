// https://leetcode.com/problems/add-two-numbers/

/**
 * Đề bài: Cho 2 DSLK đơn là đại diện cho 2 số nguyên nhưng đảo ngược (VD: [1,1,3] = 311), hãy trả về 1 DSLK là tổng của 2 số nguyên đó đảo ngược
 * @param {ListNode} l1 example: [2,4,3]
 * @param {ListNode} l2 example: [5,6,4]
 */

var addTwoNumbers = function (l1, l2) {
    let dummy = new ListNode(0)
    let cur = dummy
    let temp = 0
    while (l1 !== null || l2 !== null || temp !== 0) {
        let x = l1 ? l1.val : 0
        let y = l2 ? l2.val : 0
        let sum = temp + x + y
        temp = Math.floor(sum / 10)
        cur.next = new ListNode(sum % 10)
        cur = cur.next
        if (l1 !== null) l1 = l1.next
        if (l2 !== null) l2 = l2.next
    }
    return dummy.next
}