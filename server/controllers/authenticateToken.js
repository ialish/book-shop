const jwt = require('jsonwebtoken');

const authenticateToken = (req, res) => {
  const auth = req.headers['authorization'];
	const token = auth && auth.split(' ')[1];

  if (!token) return res.sendStatus(401); // There is no token
	
	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // The token is incorrect
    return res.json({ user });
  });
};

module.exports = authenticateToken;
