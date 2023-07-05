module.exports = () => (req, res, next) => {

    console.log(`Request to: ${req.path} with method: ${req.method}`)

    next();
}