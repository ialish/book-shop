const Book = require('../models/book');
const Author = require('../models/author');
const Publisher = require('../models/publisher');

const create = async (req, res) => {
	let authorId = null;
	let publisherId = null;

	Author.findOne({ name: req.body.author }, async (err, matchedAuthor) => {
		if (err) throw err;
		if (matchedAuthor) {
			authorId = matchedAuthor._id;
		} else {
			const author = new Author({ name: req.body.author });
			author.save(err => { if (err) throw err });
			authorId = author._id;
		};
	});

	Publisher.findOne({ name: req.body.publisher }, async (err, matchedPublisher) => {
		if (err) throw err;
		if (matchedPublisher) {
			publisherId = matchedPublisher._id;
		} else {
			const publisher = new Publisher({ name: req.body.publisher });
			publisher.save(err => { if (err) throw err });
			publisherId = publisher._id;
		};
	});

	Book.findOne({ name: req.body.book }, async (err, matchedBook) => {
		if (err) throw err;
		if (!matchedBook) {
			const book = new Book({
				name: req.body.book,
				author: authorId,
				publisher: publisherId
			});
			book.save(err => { if (err) throw err });
		};
	});
};

// const update = async (req, res) => {
	
// };

// const delete = async (req, res) => {
	
// };

module.exports = {
	create,
	// update,
	// delete
};
