const bcrypt = require('bcrypt');
const User = require('../models/user');
const Book = require('../models/book');
const Author = require('../models/author');
const Publisher = require('../models/publisher');

const createBook = (req, res) => {
	let authorId = null;
	let publisherId = null;

	// Check submission
	if (!req.body.book || !req.body.author || !req.body.publisher) {
		return res.json({ error: 'Data is missing' });
	};

	Author.findOne({ name: req.body.author }, (err, matchedAuthor) => {
		if (err) throw err;
		if (matchedAuthor) {
			authorId = matchedAuthor._id;
		} else {
			const author = new Author({ name: req.body.author });
			author.save(err => { if (err) throw err });
			authorId = author._id;
		};
	});

	Publisher.findOne({ name: req.body.publisher }, (err, matchedPublisher) => {
		if (err) throw err;
		if (matchedPublisher) {
			publisherId = matchedPublisher._id;
		} else {
			const publisher = new Publisher({ name: req.body.publisher });
			publisher.save(err => { if (err) throw err });
			publisherId = publisher._id;
		};
	});

	Book.findOne({ name: req.body.book }, (err, matchedBook) => {
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

	res.json({ message: 'Created successfully' });
};

const updateBook = (req, res) => {
	const { id } = req.body;
	
	// Check submission
	if (!req.body.book || !req.body.author || !req.body.publisher) {
		return res.json({ error: 'Data is missing' });
	};

	Book.findByIdAndUpdate(id, { name: req.body.book }, (err, book) => {
		if (err) throw err;

		Author.findByIdAndUpdate(book.author, { name: req.body.author }, err => {
			if (err) throw err;
		});
	
		Publisher.findByIdAndUpdate(book.publisher, { name: req.body.publisher }, err => {
			if (err) throw err;
		});

		res.json({ message: 'Updated successfully' });
	});
};

const deleteBook = (req, res) => {
	Book.deleteOne({ name: req.body.book }, err => {
		if (err) throw err;
		res.json({ message: 'Deleted successfully' });
	});
};

const setAdmin = async (req, res) => {
	const username = process.env.ADMIN_USERNAME;
	const password = process.env.ADMIN_PASSWORD;
	
	User.findOne({ username }, async (err, matchedUser) => {
		if (err) throw err;

		// Check if username already exists
		if (matchedUser) return;
		
		const saltRounds = 10;
		const hashedPassword = await bcrypt.hash(password, saltRounds);
		const user = new User({ username, hashedPassword });

		user.save(err => { if (err) throw err });
	});

	res.sendStatus(200);
};

module.exports = {
	createBook,
	updateBook,
	deleteBook,
	setAdmin
};
