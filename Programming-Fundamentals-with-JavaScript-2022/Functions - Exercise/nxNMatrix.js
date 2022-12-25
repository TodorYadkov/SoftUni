function nxNMatrix(number) {
    
    let rowVariable = row(number);
    let columnVariable = column(number);

    console.log(columnVariable);
    
    function row(number) {
        let result = '';
        for (let i = 0; i < number; i++) {
            result += number + ' ';
        }
        return result;
    }

    function column(number) {
        let result =`${row(number)}\n`.repeat(number);
        return result;
    }
}
nxNMatrix(2);