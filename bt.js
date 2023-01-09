let testCase = [[10,16],[2,8],[1,6],[7,12]]
testCase.sort((a, b) => a[0] - b[0]);
let lastArrowPossibleRange = testCase[0]; // phạm vi bắn mũi tên cuối

// Lấy ra 1 mũi chuẩn bị bắn nào
let arrows = 1;

for (let i = 0; i < points.length; i++) {

    let [currBalloonStart, currBalloonEnd] = points[i];
    const [lastArrowPossibleStart, lastArrowPossibleEnd] = lastArrowPossibleRange;

    // if this balloon starts before or equal to the lastArrowPossibleEnd, then it can overlap, and is hit
    if (currBalloonStart <= lastArrowPossibleEnd) {
      // now you must update the possible range that the arrow was fired at.
      // you can assume (because of sort) that the currentBalloonStarts >= lastArrowPossibleStart
      // you cannot assume the the currBalloonEnd >= lastArrowPossibleEnd (this balloon could end sooner)*
      // * first balloon [1,8], second balloon [2,4] 
      // * To hit both the arrows new possible range is [2,4]
      // * This is what many solutions are getting wrong

      lastArrowPossibleRange = [currBalloonStart,Math.min(currBalloonEnd, lastArrowPossibleEnd)];
      // move onto the next balloon without incrementing arrows, because this one was popped with the prev arrow
      continue;
    }
    // Otherwise, the current balloon starts after the end of the lastArrowPossibleRange 
    // You need a new arrow
    arrows++;
    // and a new possible range for that arrow
    lastArrowPossibleRange = [currBalloonStart, currBalloonEnd];
  }