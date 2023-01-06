// https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/description
// https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons/submissions/872722173

function get_stacked(p1, p2) {
        const stacked = (p2[0] <= p1[1] && p2[1] >= p1[0])
        return {
            stacked,
            p: [Math.max(p1[0],p2[0]), Math.min(p1[1], p2[1])]
        }
}

var findMinArrowShots = function(points) {
    const _points = points.sort((a, b) => a[0] - b[0])

    let result = 0
    let temp = _points[0]
    _points.forEach(item => {
        let s = get_stacked(temp, item)
        if (s.stacked) {
            temp = s.p
        } else {
            result ++
            temp = item
        }
    })
    return result+1
}
