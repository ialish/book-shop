import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
	const { pathname } = useLocation();

	if (pathname === '/admin' || pathname === '/user') {
		return (
			<>
				<Link to='/logout'>Logout</Link><br/>
			</>
		);
	} else {
		return (
			<>
				<Link to='/register'>Register</Link><br/>
				<Link to='/login'>Login</Link><br/>
			</>
		);
	}
};

export default Navigation;
