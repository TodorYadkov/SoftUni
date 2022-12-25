function sequence(input) {
    let number = Number(input[0]);
    let count = 1;

    while (count <= number) {
        console.log(count);
        count = count * 2 + 1;
    }
}
sequence([31])