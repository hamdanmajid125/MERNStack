const express = require('express')
const authcontroller = require('../controllers/authcontroller')
const validate = require('../middleware/validate-middleware')
const validator = require('../validators/validators')
const router = express.Router()

// router.get('/',(req,res) => {
//     res.status(200).send('Hello Hamdean')
// })

router.route('/').get(authcontroller.home)
router.route('/register').post(validate(validator.signedUpSchema),authcontroller.register)
router.route('/login').post(validate(validator.signedInSchema),authcontroller.login)


module.exports = router