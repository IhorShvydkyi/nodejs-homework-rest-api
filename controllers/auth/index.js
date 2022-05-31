const signup = require('./signup')
const login = require('./login')
const logout = require('./logout')
const getCurrent = require('./getCurrent')
const updateAvatar = require('./updateAvatar')
const verifyEmail = require('./verifyEmail')
const verificationToken = require('./verificationToken')

module.exports = {
	signup,
	login,
	logout,
	getCurrent,
	updateAvatar,
	verifyEmail,
	verificationToken,
}
