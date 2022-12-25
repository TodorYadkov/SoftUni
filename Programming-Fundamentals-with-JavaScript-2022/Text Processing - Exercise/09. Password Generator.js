function passwordGenerator(input) {
    let password = (input[0] + input[1]).toLocaleLowerCase();
    let key = input[2].toLocaleUpperCase();
    let vowelLetter = ['a', 'e', 'i', 'o', 'u'];
    let currentKeyIndex = 0;
    for (let char of password) {
        if (vowelLetter.includes(char)) {
            password = password.replace(char, key[currentKeyIndex++]);
            if (key[currentKeyIndex] === undefined) {
                currentKeyIndex = 0;
            }
        }
    }
    console.log(`Your generated password is ${password.split('').reverse().join('')}`);
}
passwordGenerator(["ilovepizza", "ihatevegetables", "orange"]);
passwordGenerator(["easymoneyeazylife", "atleasttencharacters", "absolute"]);
passwordGenerator(["areyousureaboutthisone", "notquitebutitrustyou", "disturbed",]);