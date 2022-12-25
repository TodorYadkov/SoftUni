function multiplyTable(input) {
    let num = input[0];
    let n1 = Number(num[2]);
    let n2 = Number(num[1]);
    let n3 = Number(num[0]);

    for (let a = 1; a <= n1; a++) {
        for (let b = 1; b <= n2; b++) {
            for (let c = 1; c <= n3; c++) {
                let result = a * b * c;
                console.log(`${a} * ${b} * ${c} = ${result}`);
            }
        }
    }
}
multiplyTable(["324"])