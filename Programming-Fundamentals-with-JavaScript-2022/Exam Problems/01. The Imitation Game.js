function theImitationGame(arr) {
    let workArr = arr.slice();
    let commandObj = {
        Move,
        Insert,
        ChangeAll,
    };

    let messageToArr = workArr.shift();
    while (workArr[0] !== 'Decode') {
        let [command, firstValue, secondValue] = workArr.shift().split('|');
        if (commandObj.hasOwnProperty(command)) {
            messageToArr = commandObj[command](messageToArr, firstValue, secondValue);
        }
    }

    console.log(`The decrypted message is: ${messageToArr}`);


    function Move(messageArr, numLetters) {
        let firstNLetter = messageArr.substring(0, Number(numLetters));
        let seconNLetter = messageArr.substring(Number(numLetters));
        messageArr = seconNLetter + firstNLetter;
        return messageArr;
    };

    function Insert(messageArr, index, value) {
        let firstPart = messageArr.substring(0,Number(index)) + value;
        let secondPart = messageArr.substring(Number(index));
        messageArr = firstPart + secondPart; 
        return messageArr;
    };

    function ChangeAll(messageArr, targetValue, replaceValue) {
        let pattern = new RegExp(`${targetValue}`,'g');
        messageArr = messageArr.replace(pattern,replaceValue);
        return messageArr;
    };
}

theImitationGame(['zzHe', 'ChangeAll|z|l', 'Insert|2|o', 'Move|3', 'Decode',]);

// theImitationGame(['owyouh','Move|2','Move|3','Insert|3|are','Insert|9|?','Decode',]);

// theImitationGame(['123', 'Move|4', 'Decode']);