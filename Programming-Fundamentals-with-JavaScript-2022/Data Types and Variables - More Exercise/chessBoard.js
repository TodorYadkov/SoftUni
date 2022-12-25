function chessBoard(n) {
    console.log('<div class="chessboard">');
    let currColor = 'black';
    for (let i = 1; i <= n; i++) {
        console.log('  <div>');
        for (let j = 1; j <= n; j++) {
            if (currColor === 'black') {
                console.log('    <span class="black"></span>');
                currColor = 'white';
            } else if (currColor === 'white') {
                console.log('    <span class="white"></span>');
                currColor = 'black';
            }
        }
        console.log('  </div>');
        if (n % 2 === 0) {
            if (currColor === 'black') {
                currColor = 'white';
            } else if (currColor === 'white') {
                currColor = 'black';
            }
        }
    }
    console.log('</div>');
}
chessBoard(3);
chessBoard(6);