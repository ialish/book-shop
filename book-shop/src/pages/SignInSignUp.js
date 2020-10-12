import React, { useContext, useState } from 'react';
import { Redirect, Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import Context from '../Context';

const SignInSignUp = () => {
	const { pathname } = useLocation();
	const action = pathname[1].toUpperCase() + pathname.slice(2);

	const [user, setUser] = useContext(Context);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [errorMsg, setErrorMsg] = useState('');
	
	const handleSubmit = async (event) => {
		event.preventDefault();

		const result = await axios.post(`http://localhost:8000${pathname}`, {
			username, password
		});
		const { error, accessToken } = result.data;
		
		if (error) {
			setErrorMsg(error);
		} else {
			setErrorMsg('');
			setUser({ accessToken });
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		name === 'username' ? setUsername(value) : setPassword(value);
	};

	return (
		<>
			<h1>{action} Page</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor="username">Username: </label>
				<input type="text" id="username" name="username" value={username}
					onChange={handleChange} /><br/>
				<label htmlFor="password">Password: </label>
				<input type="password" id="password" name="password" value={password}
					onChange={handleChange} /><br/>
				<button type="submit">{action}</button>
			</form>
			<h3>{errorMsg}</h3>
			{user.accessToken ? <Redirect to='/user' /> : null}
			<Link to='/'>Return Home</Link>
		</>
	);
};

export default SignInSignUp;
