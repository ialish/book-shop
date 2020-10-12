import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import Context from './Context';
import Navigation from './components/Navigation';
import Homepage from './pages/Homepage';
import SignInSignUp from './pages/SignInSignUp';
import Admin from './pages/Admin';
import User from './pages/User';
import ErrorPage from './pages/ErrorPage';

const App = () => {
	const [user, setUser] = useState({});

	return (
		<Context.Provider value={[user, setUser]}>
			<Navigation />
			<Switch>
				<Route exact path='/' component={Homepage} />
				<Route path='/register' component={SignInSignUp} />
				<Route path='/login' component={SignInSignUp} />
				<Route path='/admin' component={Admin} />
				<Route path='/user' component={User} />
				<Route component={ErrorPage} />
			</Switch>
		</Context.Provider>
	);
};

export default App;
