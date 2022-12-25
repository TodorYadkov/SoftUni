function previousDay(year, month, day) {
    day -= 1;
    let date = new Date(year,month - 1,day);
    let getDay = date.getDate();
    let getMonth = date.getMonth() + 1;
    let getYear = date.getFullYear();

    console.log(`${getYear}-${getMonth}-${getDay}`);
}
previousDay(2016, 9, 30);
previousDay(2016, 10, 1);