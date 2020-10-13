import React from 'react';
import BookList from '../components/BookList';

const Homepage = () => {
	const noAction = () => {};

	return (
		<>
			<BookList handleClick={noAction} />
		</>
	);
};

export default Homepage;
