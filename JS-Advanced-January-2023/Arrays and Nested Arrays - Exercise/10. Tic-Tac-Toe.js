function ticTacToe(moves) {
    const board = [[false, false, false],
    [false, false, false],
    [false, false, false]];

    let countMoves = 0;
    let playerMark = 'X';
    let isWinning = false;

    while (moves.length > 0) {
        let [c1, c2] = moves.shift().split(' ').map(x => Number(x));

        if (board[c1][c2] === false) {
            board[c1][c2] = playerMark;

            isWinning = isWinningFunction(playerMark);
            if (isWinning) {
                break;
            }

            countMoves++;
            playerMark = playerMark === 'X' ? 'O' : 'X';
        } else {
            if (countMoves === 9) {
                break;
            }
            console.log('This place is already taken. Please choose another!');
        }
    }

    if (isWinning) {
        console.log(`Player ${playerMark} wins!`);
    } else {
        console.log('The game ended! Nobody wins :(');
    }

    board.forEach(arr => console.log(arr.join('\t')));

    function isWinningFunction(playerMark) {
        for (let i = 0; i < board.length; i++) {
            let checkRow = board[i].filter(mark => mark === playerMark);
            let chekcCol = board.map((_, index, arr) => arr[index][i] === playerMark ? playerMark : '').filter(el => el === playerMark);

            let tempIndex = 0;
            let checkRightDiagonal = board.map((_, index, arr) => arr[index][tempIndex++] === playerMark ? playerMark : '').filter(el => el === playerMark);
            let checkLeftDiagonal = board.map((_, index, arr) => arr[index][--tempIndex] === playerMark ? playerMark : '').filter(el => el === playerMark);

            let isWin = (checkRow.length === 3) ||
                (chekcCol.length === 3) ||
                (checkRightDiagonal.length === 3) ||
                (checkLeftDiagonal.length === 3);

            if (isWin) {
                return true;
            }
        }

        return false;
    }
}
 ticTacToe(["0 1",
     "0 1",
     "0 1",
     "0 1",
     "0 1",
     "0 1",
     "0 1",
     "0 1",
     "0 1",
     "0 0"]);

 ticTacToe(["0 0",
     "0 0",
     "1 1",
     "0 1",
     "1 2",
     "0 2",
     "2 2",
     "1 2",
     "2 2",
     "2 1"]);

 ticTacToe(["0 3",
     "-1 0"]);

 ticTacToe(["0 1",
     "0 0",
     "0 2",
     "2 0",
     "1 0",
     "1 1",
     "1 2",
     "2 2",
     "2 1",
     "0 0"]);

ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"]);