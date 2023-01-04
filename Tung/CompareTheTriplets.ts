function compareTriplets(a: number[], b: number[]): number[] {
    let [x1, y1, z1] = a
    let [x2, y2, z2] = b
    let A_point:number = 0
    if (x1 > x2) { A_point += 1 }
    if (y1 > y2) { A_point += 1 }
    if (z1 > z2) { A_point += 1 }
    let B_point:number = 0
    if (x1 < x2) { B_point += 1 }
    if (y1 < y2) { B_point += 1 }
    if (z1 < z2) { B_point += 1 }
    return [A_point, B_point]
}