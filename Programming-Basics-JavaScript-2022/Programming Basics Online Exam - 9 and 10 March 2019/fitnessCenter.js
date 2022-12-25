function fitnessCenter(input) {
    let index = 0;
    let numVisitors = Number(input[index]);
    index++;
    let back = 0;
    let chest = 0;
    let legs = 0;
    let abs = 0;
    let shake = 0;
    let bar = 0;
    let totalWorkout = 0;
    let totalBuyProduct = 0;
    for (let i = 1; i <= numVisitors; i++) {
        let activity = input[index];
        index++;
        switch (activity) {
            case "Back":
                back++;
                totalWorkout++;
                break;
            case "Chest":
                chest++;
                totalWorkout++;
                break
            case "Legs":
                legs++;
                totalWorkout++;
                break;
            case "Abs":
                abs++;
                totalWorkout++;
                break;
            case "Protein shake":
                shake++;
                totalBuyProduct++;
                break;
            case "Protein bar":
                bar++;
                totalBuyProduct++;
                break;
        }
    }
    let percentWorkout = (totalWorkout / numVisitors) * 100;
    let percentBuyProduct = (totalBuyProduct / numVisitors) * 100;
    console.log(`${back} - back`);
    console.log(`${chest} - chest`);
    console.log(`${legs} - legs`);
    console.log(`${abs} - abs`);
    console.log(`${shake} - protein shake`);
    console.log(`${bar} - protein bar`);
    console.log(`${percentWorkout.toFixed(2)}% - work out`);
    console.log(`${percentBuyProduct.toFixed(2)}% - protein`);
}
fitnessCenter(["7",
"Chest",
"Back",
"Legs",
"Legs",
"Abs",
"Protein shake",
"Protein bar"])