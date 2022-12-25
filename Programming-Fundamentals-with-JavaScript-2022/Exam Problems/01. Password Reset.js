function passwordReset(input) {
    const command = [...input];
    const objCommand = { TakeOdd, Cut, Substitute };
    let password = command.shift();
    let isReadyToPrint = true;

    while (command[0] !== 'Done') {
        isReadyToPrint = true;
        let [currCommand, valueOne, valueTwo] = command.shift().split(' ');
        password = objCommand[currCommand](password, valueOne, valueTwo);

        if (isReadyToPrint) {
            console.log(password);
        } else {
            console.log('Nothing to replace!');
        }
    }

    console.log(`Your password is: ${password}`);


    function TakeOdd(str) {
        let newPassStr = '';
        for (let i = 0; i < str.length; i++) {
            if (i % 2 !== 0) {
                newPassStr += str[i];
            }
        }

        return newPassStr;
    }

    function Cut(str, indexStart, subStrLength) {
        indexStart = Number(indexStart);
        subStrLength = Number(Number(subStrLength))

        let subStr = str.substr(indexStart, subStrLength);
        str = str.replace(subStr, '');

        return str;
    }

    function Substitute(str, subStr, replacement) {

        if (str.includes(subStr)) {
            while (str.includes(subStr)) {
                str = str.replace(subStr, replacement);
            }
        } else {
            isReadyToPrint = false;
        }
        return str;
    }
}


passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute |||||| ^",
    "Substitute |||||| ^",
    "Substitute |||||| ^",
    "Done"]);

// passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
// "TakeOdd",
// "Cut 18 2",
// "Substitute ! ***",
// "Substitute ? .!.",
// "Done"]);

// passwordReset(["1A1t1e1s1t1B1t1e1s1t",
//     "TakeOdd",
//     "Cut 6 4",
//     "Done"]);

// passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy1n1y",
// "TakeOdd",
// "Cut 18 2",
// "Substitute ! ***",
// "Substitute ? .!.",
// "Done"]);
