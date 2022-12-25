function toggle() {
    let  text = document.querySelector('.button');
    if (text.textContent === 'More') {
        text.textContent = 'Less';
        document.getElementById('extra').style.display = 'block';
    } else if (text.textContent === 'Less') {
        text.textContent = 'More';
        document.getElementById('extra').style.display = 'none';
    }
}