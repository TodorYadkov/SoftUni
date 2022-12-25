function attachGradientEvents() {
    const result = document.getElementById('result');
    const gradientElement = document.getElementById('gradient');
    gradientElement.addEventListener('mousemove', gradient);

    function gradient(event) {
        result.textContent = Math.floor((event.offsetX / gradientElement.clientWidth) * 100) + '%';

    }
}