function graduation(input) {
    let nameStudent = input[0];
    let countClass = 1;
    let averageGrade = 0;

    while (countClass <= 12) {
        let grade = Number(input[countClass]);
        averageGrade += grade;
        if (grade < 4) {
            console.log(`${nameStudent} has been excluded at ${countClass} grade`);
            break;
        }
        countClass ++;
    }
    if (countClass > 12) {
        countClass --;
        averageGrade = averageGrade / countClass;
        console.log(`${nameStudent} graduated. Average grade: ${averageGrade.toFixed(2)}`); 
    }
}
graduation(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"])

