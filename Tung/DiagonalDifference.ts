const test_case = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
]

function diagonalDifference(arr: number[][]): number {
    // Write your code here
    let sumX:number = 0 // tổng đường chéo trái
    let sumY:number = 0 // tổng đường chéo phải
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length; j++){
            if (i === j){
                sumX += arr[i][j];
            } if (i + j === arr.length - 1){
                sumY += arr[i][j];
            }
        }
    }
    return Math.abs(sumX - sumY);
}

/** Explain:
 * Vòng lặp đầu tiên : i = 0
 * - j = 0: tổng đường chéo trái + thêm arr[i][j] vì i == j,
 * - j = 1
 * - j = 2: tổng đường chéo phải + thêm arr[i][j] vì i + j === arr.length - 1
 * Vòng lặp thứ 2 : i = 1
 * - j = 0
 * - j = 1: tổng đường chéo trái + thêm arr[i][j] vì i == j,
 * - j = 2: tổng đường chéo phải + thêm arr[i][j] vì i + j === arr.length - 1
 * Vòng lặp thứ 3 : i = 2
 * - j = 0: tổng đường chéo phải + thêm arr[i][j] vì i + j === arr.length - 1
 * - j = 1
 * - j = 2: tổng đường chéo trái + thêm arr[i][j] vì i == j
 */