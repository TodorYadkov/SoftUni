function concatenateData(firstName,lastName,age,town) {
    let result = `You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`;
    console.log(result);
}
concatenateData("Maria", "Ivanova", "20", "Sofia")


function concatenateDataMasiv(input) {
    let firstName = input[0];
    let lastName = input[1];
    let age = input[2];
    let city = input[3];
    let result = `You are ${firstName} ${lastName}, a ${age}-years old person from ${city}.`;
    console.log(result);
}
concatenateDataMasiv(["Maria","Ivanova",18,"Sofia"])