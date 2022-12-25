function calorieObject(arrInput) {
    const resultObj = {};

    for (let i = 0; i < arrInput.length; i += 2) {
        let product = arrInput[i];
        let calories = arrInput[i + 1];
        resultObj[product] = Number(calories);
    }

    console.log(resultObj);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
calorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);

