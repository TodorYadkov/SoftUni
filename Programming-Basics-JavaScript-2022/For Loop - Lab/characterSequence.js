function characterSequence(input) {
    let character = input[0];
    let textLength = Number(character.length);
    for (let i = 0; i < textLength; i++) {
        let text = character[i];
        console.log(text);
    }
}
characterSequence(["afasfasdfsdfgs"])