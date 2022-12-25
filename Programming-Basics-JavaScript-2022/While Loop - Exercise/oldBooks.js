function oldBooks(input) {
    let bookTitle = input[0];
    let countBooks = 1;
    let searchBook =  input[countBooks];
    let isFound = false;
    

    while (searchBook !== "No More Books") {
        if (searchBook === bookTitle) {
            isFound = true;
            break;
        }
        countBooks ++;
        searchBook = input[countBooks];
    }
    countBooks --;
    if (isFound === false) {
        console.log("The book you search is not here!");
        console.log(`You checked ${countBooks} books.`);
    
    } else {
        console.log(`You checked ${countBooks} books and found it.`);
    }
}
oldBooks(["The Spot",
"Hunger Games",
"Harry Potter",
"Torronto",
"Spotify",
"No More Books"])