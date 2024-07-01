const express = require('express')
const authcontroller = require('../controllers/authcontroller')
const router = express.Router()

// router.get('/',(req,res) => {
//     res.status(200).send('Hello Hamdean')
// })

router.route('/').get(authcontroller.home)
router.route('/register').post(authcontroller.register)


module.exports = router