function generateReport() {
    const output = document.querySelector('#output')
    const info = document.querySelectorAll('tbody tr')
    const checkboxCheck = document.querySelectorAll('thead tr th input');
    let result = [];

    output.value = '';

    for (let i = 0; i < info.length; i++) {
        let newObject = {};
        for (let j = 0; j < checkboxCheck.length; j++) {
            if (checkboxCheck[j].checked) {
                newObject[checkboxCheck[j].name] = info[i].children[j].textContent;
            }
        }
        result.push(newObject);
    }

    output.value = JSON.stringify(result);
}








