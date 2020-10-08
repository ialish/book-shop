import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Context from './Context';
import Navigation from './components/Navigation';
import Homepage from './pages/Homepage';
import Register from './pages/Register';
import Login from './pages/Login';
import ErrorPage from './pages/ErrorPage';

const App = () => {
	const [user, setUser] = useState({});

	return (
		<Context.Provider value={[user, setUser]}>
			<Navigation />
			<Switch>
				<Route exact path='/' component={Homepage} />
				<Route path='/register' component={Register} />
				<Route path='/login' component={Login} />
				<Route component={ErrorPage} />
			</Switch>
		</Context.Provider>
	);
};

export default App;
