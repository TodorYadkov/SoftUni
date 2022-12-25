function convert(sringJSON) {
    let obj = JSON.parse(sringJSON);

    for (let el of Object.keys(obj)) {
        console.log(`${el}: ${obj[el]}`);
    }
}
convert('{"name": "George", "age": 40, "town": "Sofia"}');
convert('{"name": "Peter", "age": 35, "town": "Plovdiv"}');