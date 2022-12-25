function cutAndReverse(input) {
    let firstHalfString = input.substring(0, input.length / 2);
    let secondHalfString = input.substring(input.length / 2);
    console.log(firstHalfString.split('').reverse().join(''));
    console.log(secondHalfString.split('').reverse().join(''));
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');