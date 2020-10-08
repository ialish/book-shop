import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
	return (
		<>
			<h1>Wrong Page</h1>
			<Link to='/'>Return Home</Link>
		</>
	);
};

export default ErrorPage;
