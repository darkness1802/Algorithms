function plusMinus(arr) {
    // Write your code here
    const positive = arr.filter(val => val > 0).length / arr.length;
    const negative = arr.filter(val => val < 0).length / arr.length;
    const zeros = arr.filter(val => val === 0).length / arr.length;

    console.log(positive)
    console.log(negative)
    console.log(zeros)
}   

(function main() {
    console.log(`TEST FUNCTION`)
    plusMinus([-4, 3, -9, 0, 4, 1])
})()