import React, { useContext, useState } from 'react';
import axios from 'axios';
import Context from '../Context';
import { Redirect, Link } from 'react-router-dom';

const Login = () => {
	const [user, setUser] = useContext(Context);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [errorMsg, setErrorMsg] = useState('');
	
	const handleSubmit = async (event) => {
		event.preventDefault();

		const result = await axios.post('http://localhost:8000/login', {
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
			<h1>Login Page</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor="username">Username: </label>
				<input type="text" id="username" name="username" value={username}
					onChange={handleChange} /><br/>
				<label htmlFor="password">Password: </label>
				<input type="password" id="password" name="password" value={password}
					onChange={handleChange} /><br/>
				<button type="submit">Login</button>
			</form>
			<h3>{errorMsg}</h3>
			{user.accessToken ? <Redirect to='/' /> : null}
			<Link to='/'>Return Home</Link>
		</>
	);
};

export default Login;
