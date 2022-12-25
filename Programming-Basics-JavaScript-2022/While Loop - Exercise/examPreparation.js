function examPreparation(input) {
    let gradeToEnd = Number(input[0]);
    
    let currentTask = " ";
    let nameTaskIndex = 1;
    let gradeIndex = 2;
    let currentGrade = 0;
    let averageGrade = 0;
    let countTask = 0;
    let countBadGrade = 0;
    let lastTask = " ";

    while (countBadGrade < gradeToEnd) {
        currentTask = input[nameTaskIndex];
        currentGrade = Number(input[gradeIndex]);
        if (currentGrade <= 4) {
            countBadGrade ++;
        } 
        if (currentTask === "Enough") {
            averageGrade = averageGrade / countTask;
            console.log(`Average score: ${averageGrade.toFixed(2)}`);
            console.log(`Number of problems: ${countTask}`);
            console.log(`Last problem: ${lastTask}`);
            break;
        }
        countTask ++;
        averageGrade += currentGrade;
        lastTask = currentTask;
        nameTaskIndex += 2;
        gradeIndex += 2;
    }
    if (countBadGrade === gradeToEnd) {
        console.log(`You need a break, ${countBadGrade} poor grades.`);  
    }
}
examPreparation(["4",
"Stone Age",
"5",
"Freedom",
"5",
"Storage",
"3",
"Enough"])




























//     while (check) {
//         let currentTask = input[nameTaskIndex];
//         let currentGrade = Number(input[gradeIndex]);
//         if (currentGrade <= 4) {
//             countBadGrade ++;
//         } else {
//             countTask ++;
//         }
//         if (countBadGrade === gradeToEnd) {
//             console.log(`You need a break, ${countBadGrade} poor grades.`);
//             check = false;
//             break;
//         }
//         if (currentTask === "Enough") {
//             averageGrade = averageGrade / countTask;
//             console.log(`Average score: ${averageGrade.toFixed(2)}`);
//             console.log(`Number of problems: ${countTask}`);
//             console.log(`Last problem: ${lastTask}`);
//             check = false;
//             break;
//         }
//         lastTask = currentTask;
//         nameTaskIndex += 2;
//         gradeIndex += 2;
//         averageGrade += currentGrade;
//     }
// }
// examPreparation(["3",
// "Money",
// "6",
// "Story",
// "4",
// "Spring Time",
// "5",
// "Bus",
// "6",
// "Enough"])