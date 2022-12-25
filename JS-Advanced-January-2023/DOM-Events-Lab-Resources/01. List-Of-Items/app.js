function addItem() {
    const input = document.getElementById('newItemText');
    const li = document.createElement('li');
    li.textContent = input.value;
    
    const ul = document.getElementById('items');
    ul.appendChild(li);

    input.value = '';
}