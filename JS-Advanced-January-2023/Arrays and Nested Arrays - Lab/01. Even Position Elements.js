function evenPositionElement(input) {
    let evenPositionEl = input.filter((_, i, arr) => {
        if (i % 2 === 0) {
            return true;
        } else {
            return false;
        }
    });
    console.log(evenPositionEl.join(' '));
}

evenPositionElement(['20', '30', '40', '50', '60']);
evenPositionElement(['5', '10']);