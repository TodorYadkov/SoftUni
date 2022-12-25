function nextDay(year,month,day) {
    let nextDayNum = new Date(year, month - 1, day + 1);
    let newYear = nextDayNum.getFullYear();
    let newMonth = nextDayNum.getMonth() + 1;
    let newDate = nextDayNum.getDate();
    console.log(`${newYear}-${newMonth}-${newDate}`);
}
nextDay(2016, 9, 30)