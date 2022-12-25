function convert(input1,input2,input3) {
    let objPerson = {
        name: input1,
        lastName: input2,
        hairColor: input3
    };

let result = JSON.stringify(objPerson);
    
console.log(result)

}
convert('George', 'Jones', 'Brown');
convert('Peter', 'Smith', 'Blond');