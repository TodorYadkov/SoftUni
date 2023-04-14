function errorHandler(error) {
    const result = {
        message: [],
        fields: {}
    };

    if (error.name === 'ValidationError') {
        for (const [field, e] of Object.entries(error.errors)) {
            result.message.push(e.message);
            result.fields[field] = field;
        }
    } else if (Array.isArray(error)) {
        result.message = error.map(e => e.msg);
        result.fields = Object.fromEntries(error.map(e => [e.param, e.param]));
    } else {
        result.message = error.message.split('\n');
    }

    return result;
}

module.exports = {
    errorHandler,
};

// check type of error
// if Array -> express validator, take msg and param props from array
// else if error.name = ValidationError -> Mongoose validation, take error.entries => ([field, e]) => [field, e.message]
// else, process regular error, take message prop
// return { messages: [String], fields: Object }