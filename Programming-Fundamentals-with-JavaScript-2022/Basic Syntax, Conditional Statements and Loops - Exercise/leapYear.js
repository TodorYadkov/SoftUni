function leapYear(year) {
    let isLeapYear = false;
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        isLeapYear = true;
    }
    if (isLeapYear) {
        console.log("yes");
    } else {
        console.log("no");
    }
}
leapYear(2024)
leapYear(2003)
leapYear(1900)
leapYear(2000)