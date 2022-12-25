function mergeArrays(firstArray, secondArray) {
    let newArray = [];
    for (let i = 0; i < firstArray.length; i++) {
        let tempData = '';
        if (i % 2 === 0) {
            tempData = Number(firstArray[i]) + Number(secondArray[i]);
            newArray.push(tempData);
        } else {
            tempData += firstArray[i] + secondArray[i];
            newArray.push(tempData);
        }
    }
    console.log(newArray.join(' - '));
}
mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
)
mergeArrays(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44']
)