let A = [3, 1, 4, 6, 7, 8, 1, 4, 6, 7, 7, 6].sort((a,b) => b - a)
let B = [ ...new Set(A) ]
let res = []

function check (z) {
    let count_equalZ = 0
    for (let i = 0; i < A.length; i++) {
        if (A[i] == z) {
            count_equalZ += 1
        } 
    }
    res.push({ item: z, value : count_equalZ })
}

for (let x = 0; x < B.length; x ++) {
    check (B[x])
}

let asd = res[0]
for (let i = 0; i < res.length; i++) {
    if (res[i].value > asd.value) {
        asd = res[i]
    }
}

console.log(`So lan xuat hien nhieu nhat trong mang:`)
console.log(asd)