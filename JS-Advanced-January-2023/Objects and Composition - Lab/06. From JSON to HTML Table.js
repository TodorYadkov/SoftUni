function fromJSONToHTMLTable(input) {
    let studentsList = JSON.parse(input);
    let table = [];
    table = tableHeader(Object.keys(studentsList[0]));
    table = tableRow(studentsList);

    return table.join('\r\n');

    //function part
    function tableHeader(header) {
        table.push('<table>');
        let tempArr = [];
        header.forEach(el => {
            let tempValue = escapeHtmlTag(el);
            tempArr.push(`<th>${el}</th>`);
        });

        table.push(`<tr>${tempArr.join('')}</tr>`);
        return table;
    }

    function tableRow(inputData) {
        for (let el of inputData) {
            let currentData = [];
            for (let value of Object.values(el)) {
                let tempValue = escapeHtmlTag(value);
                currentData.push(`<td>${tempValue}</td>`);
            }
            table.push(`<tr>${currentData.join('')}</tr>`);
        }
        table.push('</table>')
        return table;
    }

    function escapeHtmlTag(data) {
        return data
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }
}
console.log(fromJSONToHTMLTable(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`));

console.log(fromJSONToHTMLTable(`[{"Name":"Pesho",
"Score":4,
" Grade":8},
{"Name":"Gosho",
"Score":5,
" Grade":8},
{"Name":"Angel",
"Score":5.50,
" Grade":10}]`
));