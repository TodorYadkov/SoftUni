function titles(input) {
    let age = Number(input[0]);
    let gender = input[1];

    switch (gender) {
        case "f":
            if (age >= 16) {
                console.log("Ms.");
            } else {
                console.log("Miss");
            }           
            break;
        case "m":
            if (age >= 16) {
                console.log("Mr.");
            } else {
                console.log("Master");
            }           
            break;
        default:
            break;
    }
}
titles(["13.5",
"m"])


