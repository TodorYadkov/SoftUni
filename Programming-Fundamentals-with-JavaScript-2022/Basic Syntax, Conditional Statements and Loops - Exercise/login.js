function login(input) {
    let index = 0;
    let userName = input[index];
    index++;
    let pass = "";
    let isPassTrue = true;
    for (let i = userName.length - 1; i >= 0; i--) {
        let currentLetter = userName[i];
        pass += currentLetter;
    }
    let currentPassword = input[index];
    index++;
    let countWrongPass = 1;
    while (pass !== currentPassword) {
        if (countWrongPass > 3) {
            console.log(`User ${userName} blocked!`);
            isPassTrue = false;
            break;
        }
        console.log("Incorrect password. Try again.");
        currentPassword = input[index];
        index++;
        countWrongPass++;
    }
    if (isPassTrue) {
        console.log(`User ${userName} logged in.`);
    }
}
login(['Acer','login','go','let me in','recA'])