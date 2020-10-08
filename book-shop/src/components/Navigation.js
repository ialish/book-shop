import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
	return (
		<>
			<Link to='/register'>Register</Link><br/>
      <Link to='/login'>Login</Link><br/>
		</>
	);
};

export default Navigation;
