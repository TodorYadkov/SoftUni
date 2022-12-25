function buildAWall(input) {
    input = input.map(x => Number(x));
    let totalConcrete = 0;
    let sumConcreteForDay = [];
    while (input.length !== 0) {
        let count = 0;
        for (let i = 0; i < input.length; i++) {
            if (input.includes(30)) {
                let indexForRemove = input.indexOf(30);
                input.splice(indexForRemove, 1);
                i-=2;
                if (i === -2) {
                    i = -1;
                }
            } else {
                let tempNum = Number(input[i]) + 1;
                input.splice(i, 1, tempNum);
                count++;
            }
        }
        totalConcrete += Number(count * 195);
        sumConcreteForDay.push(count * 195);
    }
    sumConcreteForDay.pop();
    console.log(sumConcreteForDay.join(', '));
    console.log(totalConcrete * 1900 + ' pesos');
}
buildAWall([17]);
buildAWall([17, 22, 17, 19, 17]);
buildAWall([21, 25, 28]);