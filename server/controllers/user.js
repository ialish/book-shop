const User = require('../models/user');

const savePurchased = (req, res) => {
	const { username, purchasedId } = req.body;
	
	User.updateOne({ username }, { "$push": { "purchasedBooks": purchasedId } }, (err) => {
		if (err) throw err;
		res.send({ message: 'Purchased successfully' });
	});
};

const booksPurchased = (req, res) => {
	const { username } = req.body;

	User
		.findOne({ username })
		.populate({
			path: 'purchasedBooks',
			populate: [{
				path: 'author',
				model: 'author'
			}, {
				path: 'publisher',
				model: 'publisher'
			}]
		})
		.exec((err, book) => {
			if (err) throw err;
			res.send(book.purchasedBooks);
		});
};

module.exports = {
	savePurchased,
	booksPurchased
};
