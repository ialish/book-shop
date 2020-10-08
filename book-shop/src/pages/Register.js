import React, { useState } from 'react';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';

const Register = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [message, setMessage] = useState({});
	
	const handleSubmit = async (event) => {
		event.preventDefault();

		const result = await axios.post('http://localhost:8000/register', {
			username, password
		});
		setMessage(result.data);
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		name === 'username' ? setUsername(value) : setPassword(value);
	};

	return (
		<>
			<h1>Register Page</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor="username">Username: </label>
				<input type="text" id="username" name="username" value={username}
					onChange={handleChange} /><br/>
				<label htmlFor="password">Password: </label>
				<input type="password" id="password" name="password" value={password}
					onChange={handleChange} /><br/>
				<button type="submit">Register</button>
			</form>
			<h3>{message.error}</h3>
			{message.message ? <Redirect to='/' /> : null}
			<Link to='/'>Return Home</Link>
		</>
	);
};

export default Register;
