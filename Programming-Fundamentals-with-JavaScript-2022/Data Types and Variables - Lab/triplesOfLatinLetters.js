function triplesOfLatinLetters(n) {
    n = Number(n);
    for (let k = 0; k < n; k++) {
        let leter1 = String.fromCharCode(97 + k);
        for (let l = 0; l < n; l++) {
            let leter2 = String.fromCharCode(97 + l);
            for (let m = 0; m < n; m++) {
                let leter3 = String.fromCharCode(97 + m);
                console.log(leter1+leter2+leter3);
            }
        }
    }
}
triplesOfLatinLetters('2');