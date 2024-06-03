const express = require('express')
const { registerUser } = require('../controller/registerUser')
const checkEmail = require('../controller/checkEmail')
const checkpassword = require('../controller/checkPassword')
const userDetail = require('../controller/userDetail')
const logout = require('../controller/logout')
const updateUser = require('../controller/updateUser')
const router = express.Router()
// create user api

router.post('/register',registerUser)
router.post('/email',checkEmail)

router.post('/password',checkpassword)
router.get('/user-details',userDetail)
router.get('/logout',logout)
router.post('/update-user',updateUser)
module.exports = router
