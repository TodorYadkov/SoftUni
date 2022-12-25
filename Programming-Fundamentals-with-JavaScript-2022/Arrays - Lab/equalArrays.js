function equalArrays(arr1, arr2) {
    let sum = 0;
    let isEqual = true;
    let difference = 0;
    for (let i = 0; i < arr1.length; i++) {
        let compareArr1 = arr1[i];
        let compareArr2 = arr2[i];
        if (compareArr1 === compareArr2) {
            let num = Number(arr1[i]);
            sum += num;
        } else {
            difference = i;
            isEqual = false;
            break;
        }
    }
    if (isEqual) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${difference} index`);
    }
}
equalArrays(['10','20'], ['10','20','30'])
equalArrays(['1','2','3','4','5'], ['1','2','4','4','5'])
equalArrays(['1'], ['10'])