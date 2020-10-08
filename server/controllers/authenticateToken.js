const authenticateToken = (req, res, next) => {
  const auth = req.headers['authorization'];
	const token = auth && auth.split(' ')[1];

  if (!token) return res.sendStatus(401); // There is no token
	
	jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403); // The token is incorrect
    req.user = user;
  });

  next();
};

module.exports = authenticateToken;
