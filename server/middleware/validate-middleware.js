const validate = (schema) => async (req, res, next) => {
    try {
        const parsedBody = await schema.parseAsync(req.body);
        req.body = parsedBody;
        next();
    } catch (error) {
        const errors = error.errors
        let errorString = ""
        errors.forEach(validateError => {
            errorString += validateError.message+'\n'
        });
        next({type:'validation_error', status : 422,message: errorString })
    }
}

module.exports = validate;
