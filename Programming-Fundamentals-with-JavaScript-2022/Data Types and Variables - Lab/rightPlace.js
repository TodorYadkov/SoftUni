function rightPlace(string1, char, string2) {
    let newString = string1.replace('_',char);
    console.log(newString === string2 ? 'Matched' : 'Not Matched');
}
rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');