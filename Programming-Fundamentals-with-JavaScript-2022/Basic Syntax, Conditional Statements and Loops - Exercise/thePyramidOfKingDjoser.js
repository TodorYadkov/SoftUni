function thePyramidOfKingDjoser(dimension, increment) {
    let sumStone = 0;
    let sumMarble = 0;
    let sumLapisLazuli = 0;
    let sumGold = 0;
    let finalyHeight = 0;
    let outterLayer = 0;
    while (dimension > 0) {
        finalyHeight++;
        let currentDimension = dimension * dimension;
        dimension -= 2;
        outterLayer = dimension * dimension;
        if (dimension <= 0) {
            sumGold += currentDimension * increment;
            break;
        }
        if (finalyHeight % 5 === 0) {
            sumLapisLazuli += (currentDimension - outterLayer) * increment;
            sumStone += outterLayer * increment;
        } else {
            sumStone += outterLayer * increment;
            sumMarble += (currentDimension - outterLayer) * increment;
        }
    }
    finalyHeight *= increment;
    console.log(`Stone required: ${Math.ceil(sumStone)}`);
    console.log(`Marble required: ${Math.ceil(sumMarble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(sumLapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(sumGold)}`);
    console.log(`Final pyramid height: ${Math.floor(finalyHeight)}`);
}
thePyramidOfKingDjoser(11,1)
thePyramidOfKingDjoser(11,0.75)
thePyramidOfKingDjoser(12,1)
thePyramidOfKingDjoser(23,0.5)
