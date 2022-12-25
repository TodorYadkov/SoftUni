function extractText() {
    const list = Array.from(document.getElementById('items').children).map(el => el.textContent);
    document.getElementById('result').value = list.join('\n');
}