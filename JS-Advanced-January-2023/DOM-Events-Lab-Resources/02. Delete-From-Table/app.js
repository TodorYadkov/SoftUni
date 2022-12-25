function deleteByEmail() {
    // const input = document.querySelector('input[name="email"]').value;
    const input = document.getElementsByTagName('input')[0].value;
    const table = document.querySelectorAll('#customers tbody tr');
    let isDeleted = false;

    for (let row of table) {
        if (row.children[1].textContent === input) {
            // const parent = row.parentElement;
            // parent.removeChild(row);
            row.remove();
            isDeleted = true;
            break;
        }
    }

    if (isDeleted) {
        document.getElementById('result').textContent = 'Deleted.';
    } else {
        document.getElementById('result').textContent = 'Not found.'
    }
    
    document.getElementsByTagName('input')[0].value = '';
}