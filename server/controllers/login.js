const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const login = async (req, res) => {
	const { username, password } = req.body;
	
	// Check submission
	if (!username || !password) {
		return res.send({ error: 'Data is missing' });
	};

	User.findOne({ username }, async (err, matchedUser) => {
		if (err) throw err;

		// Check if username not exists
		if (!matchedUser) {
			return res.send({ error: 'Data is incorrect' });
		};

		const { hashedPassword } = matchedUser;
		const isValid = await bcrypt.compare(password, hashedPassword);		
		
		// Check if password is correct
		if (!isValid) {
			return res.send({ error: 'Data is incorrect' });
		};

		const accessToken = jwt.sign(
			{ username: matchedUser.username },
			process.env.ACCESS_TOKEN_SECRET
		);
		return res.send({ accessToken });
	});
};

module.exports = login;
