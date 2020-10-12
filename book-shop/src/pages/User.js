import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import Context from '../Context';
import BookList from '../components/BookList';

const User = () => {
	const [user] = useContext(Context);
	if (!user.accessToken) {
		return (
			<Redirect to='/' />
		);
	}

	return (
		<>
			<BookList />
			<h2>Your Last Purchased Books:</h2>
		</>
	);
};

export default User;
