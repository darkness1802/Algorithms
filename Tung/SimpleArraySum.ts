function simpleArraySum(ar: number[]): number {
    let result:number = 0;
    for (let i = 0; i < ar.length; i++) result += ar[i];
    return result;
}