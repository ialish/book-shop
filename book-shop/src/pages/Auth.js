import React, { useContext, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Context from '../Context';

const Auth = () => {
	const [user, setUser] = useContext(Context);
	
	useEffect(() => {
		( async () => {
			const result = await axios.get(`http://localhost:8000/authenticate`, {
				headers: { 'authorization': `Bearer ${user.accessToken}` }
			});
			setUser({...user, ...result.data.user});
		}	)();
	}, []);

	return (
		user.username === 'Admin' ? <Redirect to='/admin' /> : 
			user.username ? <Redirect to='/user' /> :
				<Redirect to='/' />
	);	
};

export default Auth;
