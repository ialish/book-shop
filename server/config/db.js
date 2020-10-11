const mongoose = require('mongoose');

const connectDB = () => {
	const uri = 'mongodb://localhost:27017/bookShop';
	const options = {
    useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false
	};
	
  mongoose.connect(uri, options);
};

module.exports = connectDB;
