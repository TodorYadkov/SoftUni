function printArrayWithGivenDelimeter(arr, delimiter) {
    console.log(arr.join(`${delimiter}`));
}

printArrayWithGivenDelimeter(['One',
    'Two',
    'Three',
    'Four',
    'Five'],
    '-'
);
printArrayWithGivenDelimeter(['How about no?',
    'I',
    'will',
    'not',
    'do',
    'it!'],
    '_');