function secretChat(input) {
    const workArr = [...input];
    let message = workArr.shift();
    let isAllCorrect = true;

    while (workArr[0] !== 'Reveal') {
        let currentCommand = workArr.shift().split(':|:');
        isAllCorrect = true;
        switch (currentCommand[0]) {
            case 'InsertSpace':
                message = insertSpace(message, currentCommand[1]);
                break;
            case 'Reverse':
                message = reverse(message, currentCommand[1]);
                break;
            case 'ChangeAll':
                message = changeAll(message, currentCommand[1], currentCommand[2]);
                break;
        }
        if (isAllCorrect) {
            console.log(message);
        }
    }
    
    console.log(`You have a new text message: ${message}`);

    function insertSpace(str, index) {
        index = Number(index);
        if (index >= 0 && index < str.length) {
            let firstPart = str.substring(0, index);
            let secondPart = str.substring(index);
            str = firstPart + ' ' + secondPart;
        }
        return str;
    }

    function reverse(str, subStr) {
        if (str.includes(subStr)) {
            let indexStart = str.indexOf(subStr);
            let indexEnd = indexStart + subStr.length;
            let withoutSubStrFirstPart = str.substring(0, indexStart);
            let withoutSubStrSecondPart = str.substring(indexEnd);
            let reversedSubStr = subStr.split('').reverse().join('');
            str = withoutSubStrFirstPart + withoutSubStrSecondPart + reversedSubStr;
            return str;
        } else {
            console.log('error');
            isAllCorrect = false;
            return str;
        }
    }

    function changeAll(str, subStr, replacement) {
        let regex = new RegExp(`${subStr}`, 'g');
        str = str.replace(regex, replacement);
        return str;
    }
}

// secretChat([
//     'Hiware?uiy',
//     'ChangeAll:|:i:|:o',
//     'Reveal'])

// secretChat([
//     'Hiware?uiy',
//     'ChangeAll:|:i:|:o',
//     'Reverse:|:?uoy',
//     'Reverse:|:jd',
//     'InsertSpace:|:3',
//     'InsertSpace:|:7',
//     'Reveal']);

secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal']);