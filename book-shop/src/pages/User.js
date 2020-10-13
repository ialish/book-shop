import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import Context from '../Context';
import BookList from '../components/BookList';

const bookStyle = {
	display: 'inline-block',
	paddingLeft: '20px',
	paddingRight: '20px',
	marginRight: '10px',
	marginBottom: '10px',
	borderStyle: 'solid',
	cursor: 'pointer'
};

const User = () => {
	const [user, setUser] = useContext(Context);
	const [purchased, setPurchased] = useState([]);
	const [purchasedId, setPurchasedId] = useState('');
	const [updated, setUpdated] = useState(0);

	useEffect(() => {
		( async () => {
			const result = await axios.get(`http://localhost:8000/authenticate`, {
				headers: { 'authorization': `Bearer ${user.accessToken}` }
			});
			setUser({...user, ...result.data.user});
		}	)();
	}, []);

	useEffect(() => {
		( async () => {
			if (user.username) {
				const result = await axios.post(`http://localhost:8000/user`, {
					username: user.username
				});
				setPurchased(result.data);
			}
		}	)();
	}, [user, updated]);

	useEffect(() => {
		( async () => {
			if (user.username) {
				await axios.put(`http://localhost:8000/user`, {
					username: user.username, purchasedId
				});
				setUpdated(updated + 1);
			}
		}	)();
	}, [purchasedId]);

	const handlePurchased = (book) => {
		setPurchasedId(book._id);
	};
	
	if (!user.accessToken) {
		return (
			<Redirect to='/' />
		);
	}
	
	if (user.username === 'Admin') {
		return (
			<Redirect to='/admin' />
		);
	}

	return (
		<>
			<BookList handleClick={handlePurchased} />
			<h2>Your Last Purchased Books:</h2>
			{purchased.map(book => (
				<div key={book._id} style={bookStyle}>
					<h2>{book.name}</h2>
					<h3>by {book.author.name}</h3>
					<p>Publisher: {book.publisher.name}</p>
				</div>
			))}
		</>
	);
};

export default User;
