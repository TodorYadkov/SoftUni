function smallestOfThreeNumbers(n1, n2, n3) {
    let smallestNumber = (a,b,c) => Math.min(a,b,c);
    
    console.log(smallestNumber(n1,n2,n3));
}
smallestOfThreeNumbers(2, 5, 3);
smallestOfThreeNumbers(600, 342, 123);
smallestOfThreeNumbers(25, 21, 4);
smallestOfThreeNumbers(2, 2, 2);