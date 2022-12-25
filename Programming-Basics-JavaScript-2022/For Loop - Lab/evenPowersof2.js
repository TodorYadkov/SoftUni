function evenPower(input) {
    let num = Number(input[0]);

    for (let i = 0; i <= num; i +=2) {
        let num1 = 2;
        console.log(Math.pow(num1,i));
    }
}
evenPower([8])