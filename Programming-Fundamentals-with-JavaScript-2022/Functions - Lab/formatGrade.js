function formatGrade(grade) {
    let result = '';
    let roundedGrade = grade.toFixed(2);
    if (grade < 3) {
        result = 'Fail';
        roundedGrade = 2;
    } else if (grade < 3.50) {
        result = 'Poor';
    } else if (grade < 4.50) {
        result = 'Good';
    } else if (grade < 5.50) {
        result = 'Very good';
    } else {
        result = 'Excellent';
    }
    console.log(`${result} (${roundedGrade})`);
}
formatGrade(3.33);
formatGrade(4.5);
formatGrade(2.99);