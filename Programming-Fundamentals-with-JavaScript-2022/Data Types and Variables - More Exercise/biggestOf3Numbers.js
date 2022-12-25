function biggestOf3Numbers(n1,n2,n3) {
    let maxNum = Number.MIN_SAFE_INTEGER;
    if (n1 > maxNum) {
        maxNum = n1;
    }
    if (n2 > maxNum) {
        maxNum = n2;
    }
    if (n3 > maxNum) {
        maxNum = n3;
    }
    console.log(maxNum);
}
biggestOf3Numbers(-2,7,3);
biggestOf3Numbers(130,5,99);
biggestOf3Numbers(43,43.2,43.1);
biggestOf3Numbers(2,2,2);
