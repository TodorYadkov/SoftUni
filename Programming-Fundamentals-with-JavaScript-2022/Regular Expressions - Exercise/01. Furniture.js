function furniture(input) {
    let arr = input.slice();
    const end = 'Purchase';
    const pattern = />>(?<name>\w+)<<(?<price>[\d]+\.?\d+)!(?<qty>\d+)/g;
    let currentFurniture = arr.shift();
    let totalSum = 0;
    console.log('Bought furniture:');
    while (end !== currentFurniture) {
        let match = pattern.exec(currentFurniture);
        if (match !== null) {
            totalSum += match.groups.price * match.groups.qty;
            console.log(match.groups.name)
        }
        
        pattern.lastIndex = 0;
        currentFurniture = arr.shift();
    }
    console.log(`Total money spend: ${totalSum.toFixed(2)}`);
}

furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']);

furniture(['>>Laptop<<312.2323!3',
'>>TV<<300.21314!5',
'>Invalid<<!5',
'>>TV<<300.21314!20',
'>>Invalid<!5',
'>>TV<<30.21314!5',
'>>Invalid<<!!5',
'Purchase']
);

furniture(['>Invalid<<!4',
'>Invalid<<!2',
'>Invalid<<!5',
'Purchase']
);