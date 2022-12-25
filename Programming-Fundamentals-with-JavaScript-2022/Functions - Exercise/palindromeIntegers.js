function palindromeIntegers(inputArray) {
    
    function isPalindrome(number) {
        let numberToString = String(number);
        numberToString = Number(numberToString.split('').reverse(numberToString).join(''));
        return number === numberToString ? true : false;
    }
    
    for (let i = 0; i < inputArray.length; i++) {
        console.log(isPalindrome(inputArray[i]));
    }
}
palindromeIntegers([123,323,421,121]);
palindromeIntegers([32,2,232,1010]);