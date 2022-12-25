function passwordValidator(password) {

    let countDigit = 0;
    let checkLength = iscExactLength(password);
    let checkLettersAndDigit = isOnlyLettersAndDigits(password);
    let HaveAtLeastTwoDigit = isHaveAtLeastTwoDigit(password);

    if (checkLength && checkLettersAndDigit && HaveAtLeastTwoDigit) {
        console.log('Password is valid');
    } else {
        if (!checkLength) {
            console.log('Password must be between 6 and 10 characters');
        }
        if (!checkLettersAndDigit) {
            console.log('Password must consist only of letters and digits');
        }
        if (!HaveAtLeastTwoDigit) {
            console.log('Password must have at least 2 digits');
        }
    }

    function iscExactLength(password) {
        return password.length < 6 || password.length > 10 ? false : true;
    }

    function isOnlyLettersAndDigits(password) {
        for (let charIndex of password) {
            let currentSymbol = charIndex.charCodeAt(0);
            if (!(currentSymbol >= 48 && currentSymbol <= 57) &&
                !(currentSymbol >= 65 && currentSymbol <= 90) &&
                !(currentSymbol >= 97 && currentSymbol <= 122)) {
                return false;
            }
        }
        return true;
    }

    function isHaveAtLeastTwoDigit(password) {
        for (let i = 0; i < password.length; i++) {
            let currentSymbol = Number(password.charCodeAt(i));
            if (currentSymbol >= 48 && currentSymbol <= 57) {
                countDigit++;
            }
            if (countDigit === 2) {
                return true;
            }
        }
        return false;
    }
}
passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');