function readText(input) {
    let action = 0;
    let check = input[action];
    
    while (check !== "Stop") {
        console.log(check);
        action ++;
        check = input[action];
    }
}
readText(["Sofia",
"Berlin",
"Moscow",
"Athens",
"Madrid",
"London",
"Paris",
"Stop",
"AfterStop"])