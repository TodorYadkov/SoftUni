function signCheck(n1, n2, n3) {
    let arr = [n1,n2,n3];
    let result = 'Positive';
    let count = 0;
    for (let i = 0; i < 3; i++) {
        if (arr[i] < 0) {
            count++;
        }
    }
    if (count == 3 || count == 1) result = 'Negative';
    console.log(result);
}
signCheck(5, 12, -15);
signCheck(-6, -12, 14);
signCheck(-1, -2, -3);
signCheck(-5, 1, 1);