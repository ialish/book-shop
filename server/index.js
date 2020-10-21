require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

// routers
const indexRouter = require('./routes/index');
const registerRouter = require('./routes/register');
const loginRouter = require('./routes/login');
const adminRouter = require('./routes/admin');
const userRouter = require('./routes/user');
const authenticateRouter = require('./routes/authenticate');

const app = express();
const port = process.env.PORT || 8000;

connectDB();

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rotes
app.use('/', indexRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);
app.use('/admin', adminRouter);
app.use('/user', userRouter);
app.use('/authenticate', authenticateRouter);

app.listen(port, () => {
	console.log(`app listening at http://localhost:${port}`);
});
