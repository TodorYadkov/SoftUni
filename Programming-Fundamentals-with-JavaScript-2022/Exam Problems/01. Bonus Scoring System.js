function bonusScoringSystem(input) {
    let workArray = input.slice().map(x => Number(x));
    let numberStudents = workArray.shift();
    let numberCoursesLectures = workArray.shift();
    let additionalBonus = workArray.shift();
    let studentAttendances = [];
    let totalBonus = [];
    if (numberStudents !== 0) {
        for (let i = 0; i < numberStudents; i++) {
            let curretnAttendaces = workArray.shift();
            let tempBonus = Math.ceil(curretnAttendaces / numberCoursesLectures * (5 + additionalBonus));
            studentAttendances.push(curretnAttendaces);
            totalBonus.push(tempBonus);
        }
    } else {
        studentAttendances.push(numberStudents);
        totalBonus.push(numberStudents);
    }
    studentAttendances.sort((a, b) => b - a);
    totalBonus.sort((a, b) => b - a);
    console.log(`Max Bonus: ${totalBonus[0]}.\nThe student has attended ${studentAttendances[0]} lectures.`);
}
bonusScoringSystem([
    '0', '25', '30',
    '12', '19', '24',
    '16', '20']);

// bonusScoringSystem([
//     '10', '30', '14', '8',
//     '23', '27', '28', '15',
//     '17', '25', '26', '5',
//     '18']);