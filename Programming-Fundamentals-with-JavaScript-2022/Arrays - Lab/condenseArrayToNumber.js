function condenseArrayToNumber(input) {
    let condesed = [];
    for (let n of input) {
        condesed.push(n);
    }
    while (condesed.length > 1) {
        let tempArrays = [];
        for (let i = 0; i < condesed.length - 1; i++) {
            tempArrays.push(condesed[i] + condesed[i + 1]);
        }
        condesed = tempArrays;
    }
    console.log(condesed[0]);
}
condenseArrayToNumber([2, 10, 3])
condenseArrayToNumber([5, 0, 4, 1, 2])
condenseArrayToNumber([1])