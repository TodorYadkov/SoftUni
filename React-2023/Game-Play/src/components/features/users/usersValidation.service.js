const patternEmail = /^\w+@\w+\.(com|bg|yahoo|gmail)$/i;

export const userValidationService = (formValues, setErrors) => {
    const result = {
        hasErrors: false,
        verifiedData: {}
    };

    // Trim user input
    result.verifiedData =
        Object.fromEntries(
            Object.entries(formValues)
                .map(([key, value]) => [key, value = typeof value === 'string' ? value.trim() : value])
        );

    // Validate user input
    if (result.verifiedData?.email) {
        // Store in DB all emails in lower case
        result.verifiedData.email = result.verifiedData.email.toLocaleLowerCase();

        if (result.verifiedData.email === '') {
            result.email = 'Email is required';
        } else if (!patternEmail.test(result.verifiedData.email)) {
            result.email = 'Please enter a valid email';
        }
    }

    if (result.verifiedData?.password) {
        if (result.verifiedData.password === '') {
            result.password = 'Password is required';
        } else if (result.verifiedData.password.length < 6) {
            result.password = 'Password must be at least 6 characters long';
        }
    }

    if (result.verifiedData?.rePassword) {
        if (result.verifiedData.rePassword === '') {
            result.rePassword = 'Password is required';
        } else if (result.verifiedData.rePassword.length < 6) {
            result.rePassword = 'Password must be at least 6 characters long';
        }
    }

    if (result.verifiedData?.password !== result.verifiedData?.rePassword) {
        result.notMatch = 'Password does not match'
    }

    // Check for errors
    if (Object.values(result).some(v => (typeof v === 'string') && (v !== ''))) {
        result.hasErrors = true;
    }
    

    setErrors(result);
    return result;
};