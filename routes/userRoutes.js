const express = require('express')
const { registerUser, loginUser, sessionUser } = require('../controller/userController')

const router = express.Router()

router.post('/register', registerUser )

router.post('/login', loginUser)

router.get('current', sessionUser)



module.exports = router