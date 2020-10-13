import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Context from '../Context';

const Logout = () => {
	const [user, setUser] = useContext(Context);

	useEffect(() => {
		(async () => {
			await axios.get('http://localhost:8000', {
				headers: { 'authorization': '' }
			});
		})();
		return () => setUser({});
	}, []);

	return (
		<Redirect to='/' />
	);
};

export default Logout;
