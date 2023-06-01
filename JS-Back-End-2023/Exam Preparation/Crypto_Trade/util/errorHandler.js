function errorHandler(error) {
const result = {
        message: [],
        fields: {},
    };

    if (error.name === 'ValidationError') {
        Object.entries(error.errors).map(([field, err]) => {
            result.message.push(err.message);
            result.fields[field] = field;
        });
    } else if (Array.isArray(error)) {
        error.map(e => {
            result.message.push(e.msg);
            result.fields[e.param] = e.value;
        });
    } else {
        result.message.push(error.message);
    }

    return result;
}

module.exports = {
    errorHandler,
};