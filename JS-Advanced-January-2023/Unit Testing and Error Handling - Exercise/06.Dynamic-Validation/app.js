function validate() {
    const input = document.getElementById("email");
    input.addEventListener('change', changeStyle);

    function changeStyle(event) {
        event.target.classList = /^[a-z]+@[a-z]+\.[a-z]+$/g.test(event.target.value) ? '' : 'error';
    };
}
