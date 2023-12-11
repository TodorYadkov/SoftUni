export const userCommentValidation = (formValues, setErrorState) => {
    const errors = {
        hasErrors: false,
        verifiedData: {},
        message: '',
    };

    // Trim user input
    errors.verifiedData =
        Object.fromEntries(
            Object.entries(formValues)
                .map(([key, value]) => [key, value = typeof value === 'string' ? value.trim() : value])
        );

    // Validate user input
    if (errors.verifiedData.comment === '') {
        errors.message = 'Comment cannot be empty';

    } else if (errors.verifiedData.comment.length < 10 || errors.verifiedData.comment.length > 200) {
        errors.message = 'Comment must be between 10 and 200 characters long';
    }

    // Check for errors
    if (errors.message) {
        errors.hasErrors = true;
    }

    // Update state 
    setErrorState(oldErrors => ({ ...oldErrors, ...errors }))
    return errors;
}