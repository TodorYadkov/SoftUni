function squareOfStars(number = 5) {
    let result = '';

    for (let i = 0; i < number; i++) {
        result += '* '.repeat(number) + '\n';
    }

    console.log(result.trim());
}
squareOfStars(1);
squareOfStars(2);
squareOfStars(5);
squareOfStars(7);
squareOfStars();