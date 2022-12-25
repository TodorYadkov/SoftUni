function validate() {
    const checkbox = document.getElementById('company');
    checkbox.addEventListener('change', () => {
        const companyInfo = document.getElementById('companyInfo');
        checkbox.checked ? companyInfo.style.display = 'block' : companyInfo.style.display = 'none';
    });

    document.getElementById('submit').addEventListener('click', onSubmit);

    function onSubmit(event) {
        event.preventDefault();
        let isValid = true;

        const username = document.getElementById('username');
        const patternUser = /^[a-zA-Z0-9]{3,20}$/g;
        if (patternUser.test(username.value) === false) {
            username.style = 'border-color: red';
            isValid = false;
        } else {
            username.style = 'border: none';
        };

        const email = document.getElementById('email');
        const patternEmail = /^.*@.*\..*$/g;
        if (patternEmail.test(email.value) === false) {
            email.style = 'border-color: red';
            isValid = false;
        } else {
            email.style = 'border: none';
        };

        const password = document.getElementById('password');
        const confirmPassword = document.getElementById('confirm-password');
        const patternPass = /^[\w]{5,15}$/g;
        if (patternPass.test(password.value) === false || confirmPassword.value !== password.value) {
            password.style = 'border-color: red'
            confirmPassword.style = 'border-color: red';
            isValid = false;
        } else {
            password.style = 'border: none';
            confirmPassword.style = 'border: none';
        };

        const companyNumber = document.getElementById('companyNumber');
        const patternCompanyNumber = /^[0-9]{4}$/g;
        if (checkbox.checked) {
            if (patternCompanyNumber.test(companyNumber.value) === false) {
                companyNumber.style = 'border-color: red';
                isValid = false;
            } else {
                companyNumber.style = 'border: none';
            }
        };

        const validData = document.getElementById('valid');
        isValid ? validData.style.display = 'block' : validData.style.display = 'none';
    }
}