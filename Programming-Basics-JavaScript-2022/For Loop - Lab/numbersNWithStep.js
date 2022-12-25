function numbersWithStep(input) {
    let number = Number(input[0]);

    for(let i = 1; i <= number; i +=3) {
        console.log(i);
    }
}
numbersWithStep([10])