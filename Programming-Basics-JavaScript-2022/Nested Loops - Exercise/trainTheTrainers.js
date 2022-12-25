function trainTheTrainers(input) {
    index = 0;
    let numTrainers = Number(input[index]);
    index++;
    let presentationName = input[index];
    index++;
    let averageGradeAll = 0;
    let countGrade = 0;
    while (presentationName !== "Finish") {
        let currentPresentation = presentationName;
        let currentGrade = Number(input[index]);
        let averageGradeCourse = 0;
        while (currentPresentation === presentationName) {
            countGrade++;
            averageGradeCourse += currentGrade;
            averageGradeAll +=currentGrade;
            index++;
            currentGrade = Number(input[index]);
            if (isNaN(currentGrade)) {
                averageGradeCourse /= numTrainers;
                console.log(`${presentationName} - ${averageGradeCourse.toFixed(2)}.`);
                presentationName = input[index];
                index++;
                break;
            }
        }
    }
    averageGradeAll /= countGrade;
    console.log(`Student's final assessment is ${averageGradeAll.toFixed(2)}.`);
}
trainTheTrainers(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"])