function specialNumbers(input) {
    let num = input[0];
    let specialNum = "";

    for (let i = 1111; i <= 9999; i++) {
        let isSpecialNumber = true;
        i = String(i);
        for (let index = 0; index < i.length; index++ ) {
            let currentDigit = Number(i[index]);
            if (num % currentDigit !== 0) {
                isSpecialNumber = false;
            }
        }
        if (isSpecialNumber) {
            specialNum += i + " ";
        }
    }
    console.log(specialNum);
}
specialNumbers(["16"])