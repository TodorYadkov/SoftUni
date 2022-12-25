function solve() {
    const section = document.querySelectorAll('#quizzie section');
    const rightAnswer = {
        'onclick': 0,
        'JSON.stringify()': 0,
        'A programming API for HTML and XML documents': 0,
    }

    Array.from(document.querySelectorAll('#quizzie .answer-text')).forEach(p => p.addEventListener('click', answerFn));

    function answerFn(event) {
        const result = document.querySelector('#results');
        const currSection = event.target.parentElement.parentElement.parentElement.parentElement;

        if (rightAnswer.hasOwnProperty(event.target.textContent)) {
            rightAnswer[event.target.textContent]++;
        }

        currSection.style.display = 'none';
        currSection.nextElementSibling.style.display = 'block';

        if (currSection.nextElementSibling === result) {
            const finalResult = Object.values(rightAnswer).filter(point => point != 0).length;
            result.style.display = 'block';

            if (finalResult === 3) {
                result.querySelector('h1').textContent = 'You are recognized as top JavaScript fan!';
            } else {
                result.querySelector('h1').textContent = `You have ${finalResult} right answers`;
            }
        }
    }
}
