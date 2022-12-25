function pcGameShop(input) {
    let numSaleGame = Number(input[0]);
    let hearthstone = 0;
    let fornite = 0;
    let overwatch = 0;
    let others = 0;
    for (let i = 1; i <= numSaleGame; i++) {
        let game = input[i];
        if (game === "Hearthstone") {
            hearthstone++;
        } else if (game === "Fornite") {
            fornite++;
        } else if (game === "Overwatch") {
            overwatch++;
        } else {
            others++;
        }
    }
    hearthstone = (hearthstone / numSaleGame) * 100;
    fornite = (fornite / numSaleGame) * 100;
    overwatch = (overwatch / numSaleGame) * 100;
    others = (others / numSaleGame) * 100;
    console.log(`Hearthstone - ${hearthstone.toFixed(2)}%`);
    console.log(`Fornite - ${fornite.toFixed(2)}%`);
    console.log(`Overwatch - ${overwatch.toFixed(2)}%`);
    console.log(`Others - ${others.toFixed(2)}%`); 
}
pcGameShop(["3",
"Hearthstone",
"Diablo 2",
"Star Craft 2"])