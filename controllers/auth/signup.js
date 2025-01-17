const bcrypt = require('bcryptjs')
const gravatar = require('gravatar')
const { User } = require('../../models')
const { createError } = require('../../helpers')

const signup = async (req, res) => {
	const { email, password, subscription } = req.body
	const user = await User.findOne({ email })
	if (user) {
		throw createError(
			409,
			`a user with e-mail address "${email}" is already registered`
		)
	}
	const avatarURL = gravatar.url(email)
	const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
	// eslint-disable-next-line no-unused-vars
	const result = await User.create({
		email,
		password: hashPassword,
		subscription,
		avatarURL,
	})
	res.status(201).json({
		status: 'success',
		code: 201,
		data: { user: { email, subscription, avatarURL } },
	})
}

module.exports = signup
