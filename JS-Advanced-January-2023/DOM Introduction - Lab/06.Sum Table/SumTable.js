function sumTable() {
    const lastCol = Array.from(document.querySelectorAll('tr td:last-child'));
    let sum = 0;
    
    for (let i = 0; i < lastCol.length - 1; i++) {
        sum += Number(lastCol[i].innerText);
    }
    
    document.getElementById('sum').textContent = sum;
}