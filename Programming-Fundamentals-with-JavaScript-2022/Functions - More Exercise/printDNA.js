function printDNA(input) {
    let dnaSequence = 'ATCGTTAGGG'.split('');
    let currIndexSeq = 0;
    let workArray = ['*', '*', '*', '*', '*', '*'];
    let symbolStar = '*';
    let symbolDash = '-';

    for (let i = 1; i <= input; i++) {
        if (dnaSequence.length <= currIndexSeq) {
            currIndexSeq = 0;
        }
        if (i === 1 || i % 4 === 1) {
            workArray = beginRow(workArray);
        } else if (i === 2 || i % 4 === 2) {
            workArray = everySecondRow(workArray);
        } else if (i === 3 || i % 4 === 3) {
            workArray = everyThirdRow(workArray);
        } else if (i === 4 || i % 4 === 0) {
            workArray = endRow(workArray);
        }
        console.log(workArray.join(''));
    }

    function beginRow(data) {
        data.splice(0, 2, symbolStar, symbolStar);
        data.splice(2, 2, dnaSequence[currIndexSeq++], dnaSequence[currIndexSeq++]);
        data.splice(4, 2, symbolStar, symbolStar);

        return data;
    }

    function everySecondRow(data) {
        data.splice(0, 2, symbolStar, dnaSequence[currIndexSeq++]);
        data.splice(2, 2, symbolDash, symbolDash);
        data.splice(4, 2, dnaSequence[currIndexSeq++], symbolStar);

        return data;
    }

    function everyThirdRow(data) {
        data.splice(0, 2, dnaSequence[currIndexSeq++], symbolDash);
        data.splice(2, 2, symbolDash, symbolDash);
        data.splice(4, 2, symbolDash, dnaSequence[currIndexSeq++]);

        return data;
    }

    function endRow(data) {
        data.splice(0, 2, symbolStar, dnaSequence[currIndexSeq++]);
        data.splice(2, 2, symbolDash, symbolDash);
        data.splice(4, 2, dnaSequence[currIndexSeq++], symbolStar);

        return data;
    }
}
printDNA(50);