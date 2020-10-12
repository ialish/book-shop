import React, { useState, useEffect } from 'react';
import axios from 'axios';

const bookStyle = {
	display: 'inline-block',
	paddingLeft: '20px',
	paddingRight: '20px',
	marginRight: '10px',
	marginBottom: '10px',
	borderStyle: 'solid',
	cursor: 'pointer'
};

const BookList = () => {
	const [books, setBooks] = useState([]);
	const [searchBox, setSearchBox] = useState('');

	useEffect(() => {
		(async () => {
			let result = await axios.get('http://localhost:8000');
			result = result.data.filter(book => 
				book.name.toLowerCase().includes(searchBox.toLowerCase()));
			setBooks(result);
		})();
	}, [searchBox]);

	return (
		<>
			<h1>List of Books</h1>
			<input 
				type="search"
				placeholder="Search Books"
				onChange={(e) => setSearchBox(e.target.value)}
			/><br/>
			<h3>Press on a book to purchase it.</h3>
			{books.map(book => (
				<div key={book._id} style={bookStyle}>
					<h2>{book.name}</h2>
					<h3>by {book.author.name}</h3>
					<p>Publisher: {book.publisher.name}</p>
				</div>
			))}
		</>
	);
};

export default BookList;
