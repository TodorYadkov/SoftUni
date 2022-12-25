function area(input) {
    let typeFigure = input[0];
    let firstNumber = Number(input[1]);
    let secondNumber = Number(input[2]);
    let area = 0;
    
    switch (typeFigure) {
        case "square":
            area = firstNumber*firstNumber;
            console.log(area.toFixed(3));
            break;
        case "rectangle":
            area = firstNumber * secondNumber;
            console.log(area.toFixed(3));
            break;
        case "circle":
            area = Math.PI * Math.pow(firstNumber,2);
            console.log(area.toFixed(3));
            break;
        case "triangle":
            area = (firstNumber * secondNumber) / 2;
            console.log(area.toFixed(3));
            break;
    }
}
area(["circle","6"])



