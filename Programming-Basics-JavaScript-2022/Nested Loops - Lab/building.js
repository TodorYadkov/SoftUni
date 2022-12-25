function building(input) {
    let floor = Number(input[0]);
    let room = Number(input[1]);

    for (let f = floor; f > 0; f--) {
        let oneRow = "";
        for (let r = 0; r < room; r++) {
            if (floor === 1) {
                oneRow += (`L${f}${r} `);
            } else if (floor === f) {
                oneRow += (`L${f}${r} `);
            } else if (f % 2 === 0) {
                oneRow += (`O${f}${r} `);
            } else if (f % 2 !== 0) {
                oneRow += (`A${f}${r} `);
            }
        }
        console.log(oneRow);
    }
}
building(["9", "5"])