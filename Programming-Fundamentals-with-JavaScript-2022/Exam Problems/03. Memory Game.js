function memoryGame(input) {
    // counter to count moves
    let countMove = 0;
    // copy to new array
    let movesArray = input.slice();
    // get the first element of the array and make a new array
    let elementsOfTheGame = movesArray.shift().split(' ');
    // get the first two indexes to check
    let play = movesArray.shift();
    // loop to 'end'
    while (play !== 'end') {
        // count every move
        countMove++;
        // we convert our index to a number and sort them in DSC order if not in DSC order 
        // when we get the first index and it is less than the second the array length changes 
        // and we get an incorrect array element
        play = play.split(' ').map(x => Number(x)).sort((a,b) => b - a);
        // destructuring
        let [firstIndex,secondIndex] = play;
        // check if the index is correct
        if (elementsOfTheGame[firstIndex] !== undefined && elementsOfTheGame[secondIndex] !== undefined && firstIndex !== secondIndex) {
            // check that the elements are equal
            if (elementsOfTheGame[firstIndex] === elementsOfTheGame[secondIndex]) {
                console.log(`Congrats! You have found matching elements - ${elementsOfTheGame[firstIndex]}!`);
                // remove found element
                elementsOfTheGame.splice(firstIndex,1);
                elementsOfTheGame.splice(secondIndex,1);
            } else {
                // if the elements are not equal
                console.log('Try again!');
            }
        } else {
            // add in the middle of the array new values ​​if the indices are not correct
            elementsOfTheGame.splice(elementsOfTheGame.length / 2,0, `-${countMove}a`,`-${countMove}a`);
            console.log('Invalid input! Adding additional elements to the board');
        }
        // check if the array has more elements
        if (elementsOfTheGame.length === 0) {
            console.log(`You have won in ${countMove} turns!`);
            break;
        }
        // get next index or command 'end'
        play = movesArray.shift();
    }
    // check if has more elements in the array and command is 'end'
    if (play === 'end' && elementsOfTheGame.length !== 0) {
        console.log(`Sorry you lose :(\n${elementsOfTheGame.join(' ')}`);
    }
}

// memoryGame(["1 1 2 2 3 3 4 4 5 5", "1 0","-1 0","1 0", "1 0", "1 0", "end"]);

// memoryGame(["a 2 4 a 2 4", "0 3", "0 2", "0 1", "0 1","end"]);

// memoryGame(["a 2 4 a 2 4", "4 0", "0 2", "0 1", "0 1", "end"]);

// memoryGame(["-1","0", "0", "0 1", "0 1", "end"]);

memoryGame(['1 1 2 2', '1 1', '0 1', 'end']);