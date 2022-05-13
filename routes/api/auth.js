const express = require('express')

const { ctrlWrapper, validation } = require('../../middlewars')
const { auth: ctrl } = require('../../controllers')
const { joiSignupSchema } = require('../../models/')

const router = express.Router()

router.post('/signup', validation(joiSignupSchema), ctrlWrapper(ctrl.signup))

module.exports = router