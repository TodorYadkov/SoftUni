function argumentInfo() {
    const arg = [...arguments];
    const objTypeCount = {};

    arg.forEach(el => {
        let argType = typeof el;
        count.call(objTypeCount, argType);
        console.log(`${argType}: ${el}`)
    });

    Object.entries(objTypeCount).sort((a, b) => b[1] - a[1]).forEach(el => console.log(`${el[0]} = ${el[1]}`))

    function count(argType) {
        this[argType] === undefined ? this[argType] = 1 : this[argType]++;
    }
}

argumentInfo('cat', 42, function () { console.log('Hello world!'); });