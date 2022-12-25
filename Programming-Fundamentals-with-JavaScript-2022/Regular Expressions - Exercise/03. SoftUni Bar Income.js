function softUniBarIncome(input) {
    const pattern = /%(?<name>[A-Z][a-z]+)%(.+[^|$%.])?<(?<product>\w+)>(.+[^|$%.])?\|(?<count>\d+)\|(.+[^|$%.\d])?(?<price>\d+(\.\d+)?)\$/g;
    let arr = input.slice();
    let command = arr.shift();
    let totalSum = 0;

    while (command !== "end of shift") {
        let name = "";
        let product = "";
        let match = pattern.exec(command);
        if (match !== null) {
            let sum = Number(match.groups.count) * Number(match.groups.price);
            totalSum += sum;
            console.log(`${match.groups.name}: ${match.groups.product} - ${sum.toFixed(2)}`);
        }
        pattern.lastIndex = 0;
        command = arr.shift();
    }
    console.log(`Total income: ${totalSum.toFixed(2)}`);
}

softUniBarIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']);
console.log('----------------')

softUniBarIncome([
    "%InvalidName%<Croissant>|2|10.3$",
    "%Peter%<Gum>1.3$",
    "%Maria%<Cola>|1|2.4",
    "%Valid%<Valid>valid|10|valid20$",
    "end of shift",
]);
