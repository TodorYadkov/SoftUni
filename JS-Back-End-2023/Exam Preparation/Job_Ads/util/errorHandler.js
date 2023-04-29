module.exports = (error) => {
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
};