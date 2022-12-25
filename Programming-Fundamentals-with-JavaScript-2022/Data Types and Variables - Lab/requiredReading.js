function requiredReading(pagesCurrentBook,pagesReadOneHour,dayForWhichReadBook) {
    let neededTimeToRead = pagesCurrentBook / pagesReadOneHour;
    neededTimeToRead /= dayForWhichReadBook;
    console.log(neededTimeToRead);
}
requiredReading(212,20,2);
requiredReading(432,15,4);