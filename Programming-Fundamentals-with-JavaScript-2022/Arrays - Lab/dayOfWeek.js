function dayOfWeek(day) {
    let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    if (day >= 1 && day <= 7) {
        day--;
        console.log(days[day]);
    } else {
        console.log('Invalid day!');
    }
}
dayOfWeek(11)