function commonElements(firstArray, secondArray) {
    for (let a = 0; a < firstArray.length; a++) {
        for (let b = 0; b < secondArray.length; b++) {
            let check1 = firstArray[a];
            let check2 = secondArray[b];
            if (check1 === check2) {
                console.log(check1);
            }
        }
    }
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
)
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']
)