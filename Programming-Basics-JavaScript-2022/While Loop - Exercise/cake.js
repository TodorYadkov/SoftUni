function cake(input) {
    let cakeWidth = Number(input[0]);
    let cakeLength = Number(input[1]);
    let indexPiece = 2;
    let numberPiece = input[indexPiece];
    let sizeCake = cakeWidth * cakeLength;

    while (numberPiece !== "STOP") {
        sizeCake -= numberPiece;
        if (sizeCake <= 0) {
            console.log(`No more cake left! You need ${Math.abs(sizeCake)} pieces more.`);
            break;
        }
        indexPiece ++;
        numberPiece = input[indexPiece];
    }
    if (numberPiece === "STOP") {
        console.log(`${sizeCake} pieces are left.`);
    }
}
cake(["10",
"10",
"20",
"20",
"20",
"20",
"21"
])