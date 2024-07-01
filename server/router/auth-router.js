const express = require('express')
const authcontroller = require('../controllers/authcontroller')
const validate = require('../middleware/validate-middleware')
const signedUpSchema = require('../validators/auth-validators')
const router = express.Router()

// router.get('/',(req,res) => {
//     res.status(200).send('Hello Hamdean')
// })

router.route('/').get(authcontroller.home)
router.route('/register').post(validate(signedUpSchema),authcontroller.register)
router.route('/login').post(authcontroller.login)


module.exports = router