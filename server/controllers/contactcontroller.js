const Contact = require('../models/contact-model')

const submit = async (req, res) => {
    try {
        await Contact.create(req.body)
        return res.status(201).send({
            msg: 'Inquiry Submitted',
        })

    } catch (error) {
        next(error)
    }
}

module.exports = {
    submit
}