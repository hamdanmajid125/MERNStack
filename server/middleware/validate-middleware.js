const validate = (schema) => async (req, res, next) => {
    try {
        const parsedBody = await schema.parseAsync(req.body);
        req.body = parsedBody;
        next();
    } catch (error) {
        res.status(400).json({
            errors: error.errors
        });
    }
}

module.exports = validate;
