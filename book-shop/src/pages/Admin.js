import React, { useState } from 'react';
import axios from 'axios';
import BookList from '../components/BookList';

const Admin = () => {
	const [bookId, setBookId] = useState('');
	const [bookName, setBookName] = useState('');
	const [author, setAuthor] = useState('');
	const [publisher, setPublisher] = useState('');
	const [message, setMessage] = useState('');

	const handleBook = (book) => {
		setBookId(book._id);
		setBookName(book.name);
		setAuthor(book.author.name);
		setPublisher(book.publisher.name);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (event.target.name === 'create') {
			const result = await axios.post(`http://localhost:8000/admin`, {
				book: bookName, author, publisher
			});
			setMessage(result.data.message);
		} else if (event.target.name === 'update') {
			const result = await axios.put(`http://localhost:8000/admin`, {
				id: bookId
			});
			setMessage(result.data.message);
		} else {
			const result = await axios.delete(`http://localhost:8000/admin`, {
				book: bookName
			});
			setMessage(result.data.message);
		};
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		if (name === 'bookName') {
			setBookName(value);
		} else if (name === 'author') {
			setAuthor(value);
		} else {
			setPublisher(value);
		};
	};

	return (
		<>
			<BookList handleClick={handleBook} />
			<h2>Book:</h2>
			<form>
				<label htmlFor="bookName">Name: </label>
				<input type="text" id="bookName" name="bookName" value={bookName}
					onChange={handleChange} /><br/>
				<label htmlFor="author">Author: </label>
				<input type="text" id="author" name="author" value={author}
					onChange={handleChange} /><br/>
				<label htmlFor="publisher">Publisher: </label>
				<input type="text" id="publisher" name="publisher" value={publisher}
					onChange={handleChange} /><br/>
				<h3>{message}</h3>
				<input type="submit" name="create" value="Create" onClick={handleSubmit} />
				<input type="submit" name="update" value="Update" onClick={handleSubmit} />
				<input type="submit" name="delete" value="Delete" onClick={handleSubmit} />
			</form>
		</>
	);
};

export default Admin;
