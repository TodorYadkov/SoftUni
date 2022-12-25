function solve() {
    const resultText = document.querySelector('#check p');
    const table = document.querySelector('#container table');
    const buttons = Array.from(document.querySelectorAll('#container button'));
    buttons[0].addEventListener('click', checkFn);
    buttons[1].addEventListener('click', clearFn);

    function clearFn() {
        const trAll1 = Array.from(document.querySelectorAll('#exercise tbody tr'));
        for (let i = 0; i < trAll1.length; i++) {
            const rowData = Array.from(trAll1[i].children);
            for (let cell of rowData) {
                cell.querySelector('input').value = '';
            }
        }

        table.style.border = 'none';
        resultText.textContent = '';
    }
    
    function checkFn() {
        isSudomu = true;
        const matrix = [];
        //make matrix
        const trAll = Array.from(document.querySelectorAll('#exercise tbody tr'));
        for (let i = 0; i < trAll.length; i++) {
            matrix.push([]);
            const rowData = Array.from(trAll[i].children);
            for (let cell of rowData) {
                const num = Number(cell.querySelector('input').value);
                matrix[i].push(num);
            }
        }

        for (let i = 0; i < matrix.length; i++) {
            const rowLength = new Set();
            const colLength = new Set();
            for (let k = 0; k < matrix[i].length; k++) {
                rowLength.add(matrix[i][k]);
                colLength.add(matrix[k][i]);
            }

            if ((colLength.size !== matrix.length) || (rowLength.size !== matrix[i].length)) {
                isSudomu = false;
            }
        }

        if (isSudomu) {
            table.style.border = '2px solid green';
            resultText.style.color = 'green';
            resultText.textContent = 'You solve it! Congratulations!';
        } else {
            table.style.border = '2px solid red';
            resultText.style.color = 'red';
            resultText.textContent = 'NOP! You are not done yet...';
        }
    }
}