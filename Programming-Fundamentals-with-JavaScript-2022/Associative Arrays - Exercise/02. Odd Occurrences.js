function occurences(input) {
    let resultObj = {};
    input = input
        .split(' ')
        .map(el => el.toLowerCase());

    for (let i = 0; i < input.length; i++) {
        if (!resultObj.hasOwnProperty(input[i])) {
            resultObj[input[i]] = [];
        }
        resultObj[input[i]].push(i);
    }
    let sorted = Object.entries(resultObj).sort((a, b) => a[1][0] - b[1][0]);
    let result = '';
    for (let el of sorted) {
        if (el[1].length % 2 !== 0) {
            result += el[0] + ' ';
        }
    }
    console.log(result)
}
occurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');

occurences('Cake IS SWEET is Soft CAKE sweet Food');