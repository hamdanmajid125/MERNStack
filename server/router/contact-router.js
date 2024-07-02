const express = require('express')
const router = express.Router()
const contactcontroller = require('../controllers/contactcontroller')
const validate = require('../middleware/validate-middleware')
const validator = require('../validators/validators')



router.route('/submit').post(validate(validator.contactSchema), contactcontroller.submit)

module.exports = router
