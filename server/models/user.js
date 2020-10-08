const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;

const userSchema = new Schema({
  username: String,
	hashedPassword: String,
	purchasedBooks: [{ type: ObjectId, ref: 'book'}]
}, { versionKey: false });

module.exports = mongoose.model('user', userSchema);
