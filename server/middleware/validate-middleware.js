const validate = (schema) => async (req, res, next) => {
    try {
        const parsedBody = await schema.parsedBody(req.body)
        req.body = parsedBody
        next()
    } catch (error) {
        res.status(400).json({
            msg: error.errors
        })
    }
}
module.exports = validate