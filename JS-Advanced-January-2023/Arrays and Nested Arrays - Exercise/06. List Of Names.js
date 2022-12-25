function listOfNames(input) {
    let count = 1;
    input.sort((a, b) => a.localeCompare(b)).forEach(el => {
        console.log(`${count++}.${el}`);
    });
}

listOfNames(["John", "Bob", "Christina", "Ema"]);