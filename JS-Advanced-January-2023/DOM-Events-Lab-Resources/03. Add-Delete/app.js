function addItem() {
    const input = document.getElementById('newItemText').value;

    const liElement = document.createElement('li');
    liElement.textContent = input;
    
    const delBtn = document.createElement('a');
    delBtn.textContent = '[Delete]';
    delBtn.href = '#';
    liElement.appendChild(delBtn);

    document.getElementById('items').appendChild(liElement);
    delBtn.addEventListener('click', removeElement)

    function removeElement(event) {
        event.target.parentElement.remove();;
    }

    document.getElementById('newItemText').value = '';
}