class WineSelection {
    constructor(space) {
        this.space = space;
        this.wines = [];
        this.bill = 0;

    }

    reserveABottle(wineName, wineType, price) {
        if (this.wines.length >= this.space) {
            throw new Error('Not enough space in the cellar.');
        }

        this.wines.push({ wineName, wineType, price, paid: false });
        return `You reserved a bottle of ${wineName} ${wineType} wine.`;
    }

    payWineBottle(wineName, price) {
        const foundWine = this.wines.find(w => w.wineName === wineName);
        if (foundWine === undefined) {
            throw new Error(`${wineName} is not in the cellar.`);
        }
        if (foundWine.paid) {
            throw new Error(`${wineName} has already been paid.`);
        }

        foundWine.paid = true;
        this.bill += price;
        return `You bought a ${wineName} for a ${price}$.`;
    }

    openBottle(wineName) {
        const foundWineIndex = this.wines.findIndex(w => w.wineName === wineName);
        const foundWine = this.wines[foundWineIndex];
        if (foundWine === undefined) {
            throw new Error('The wine, you\'re looking for, is not found.');
        }
        if (foundWine.paid === false) {
            throw new Error(`${wineName} need to be paid before open the bottle.`);
        }

        this.wines.splice(foundWineIndex, 1);
        return `You drank a bottle of ${wineName}.`;
    }

    cellarRevision(wineType) {
        const printArr = [];
        if (wineType !== undefined) {
            const foundWines = this.wines.filter(w => w.wineType === wineType);
            if (foundWines.length === 0) {
                throw new Error(`There is no ${wineType} in the cellar.`);
            }

            foundWines.forEach(w => printArr.push(`${w.wineName} > ${w.wineType} - ${w.paid ? 'Has Paid' : 'Not Paid'}.`));
            return printArr.join('\n');
        }

        printArr.push(`You have space for ${this.space - this.wines.length} bottles more.`);
        printArr.push(`You paid ${this.bill}$ for the wine.`);
        this.wines
            .sort((a, b) => a.wineName.localeCompare(b.wineName))
            .forEach(w => printArr.push(`${w.wineName} > ${w.wineType} - ${w.paid ? 'Has Paid' : 'Not Paid'}.`));

        return printArr.join('\n');
    }
}



// // Input 1
// const selection = new WineSelection(2)
// console.log(selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50));
// console.log(selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120));
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));

// // You reserved a bottle of Sauvignon Blanc Marlborough White wine.
// // You reserved a bottle of Cabernet Sauvignon Napa Valley Red wine.
// // Uncaught Error Error: Not enough space in the cellar.

// // Input 2
// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
// console.log(selection.payWineBottle('Sauvignon Blanc Marlborough', 120));
// console.log(selection.payWineBottle('Bodegas Godelia Mencía', 144));

// // You bought a Sauvignon Blanc Marlborough for a 120$.
// // Uncaught Error Error: Bodegas Godelia Mencía is not in the cellar.

// // Input 3
// const selection = new WineSelection(2)
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
// selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
// selection.payWineBottle('Sauvignon Blanc Marlborough', 50);
// console.log(selection.openBottle('Sauvignon Blanc Marlborough'));
// console.log(selection.openBottle('Cabernet Sauvignon Napa Valley'));

// // You drank a bottle of Sauvignon Blanc Marlborough.
// // Uncaught Error Error: Cabernet Sauvignon Napa Valley need to be paid before open the bottle.

// // Input 4
// const selection = new WineSelection(2)
// console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144));
// console.log(selection.cellarRevision('Rose'));

// // You reserved a bottle of Bodegas Godelia Mencía Rose wine.
// // Bodegas Godelia Mencía > Rose - Not Paid.

// // Input 5
// const selection = new WineSelection(5)
// selection.reserveABottle('Bodegas Godelia Mencía', 'Rose', 144);
// selection.payWineBottle('Bodegas Godelia Mencía', 144);
// selection.reserveABottle('Sauvignon Blanc Marlborough', 'White', 50);
// selection.reserveABottle('Cabernet Sauvignon Napa Valley', 'Red', 120);
// console.log(selection.cellarRevision());

// // You have space for 2 bottles more.
// // You paid 144$ for the wine.
// // Bodegas Godelia Mencía > Rose - Has Paid.
// // Cabernet Sauvignon Napa Valley > Red - Not Paid.
// // Sauvignon Blanc Marlborough > White - Not Paid.