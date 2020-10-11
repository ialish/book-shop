const Book = require('../models/book');

const bookList = (req, res) => {
	Book
		.find({})
		.populate([{
				path: 'author',
				model: 'author'
			}, {
				path: 'publisher',
				model: 'publisher'
			}])
		.exec((err, book) => {
			if (err) throw err;
			res.send(book);
		});
};

module.exports = {
	bookList
};
