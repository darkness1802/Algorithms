function plusMinus(arr: number[]): void {
    // Write your code here
    const P = arr.filter(val => val > 0).length / arr.length;
    const N = arr.filter(val => val < 0).length / arr.length;
    const O = arr.filter(val => val === 0).length / arr.length;

    console.log(P)
    console.log(N)
    console.log(O)
}   