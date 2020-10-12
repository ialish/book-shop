import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
	const { pathname } = useLocation();

	const handleLinks = () => {
		if (pathname === '/admin' || pathname === '/user') {
			return (
				<>
					<Link to='/'>Logout</Link><br/>
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
	}

	return (
		handleLinks()
	);
};

export default Navigation;
