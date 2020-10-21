const mongoose = require('mongoose');
const { Schema, ObjectId} = mongoose;

const bookSchema = new Schema({
  name: String,
  author: { type: ObjectId, ref: 'author'},
  publisher: { type: ObjectId, ref: 'publisher'}
}, { versionKey: false });

module.exports = mongoose.model('book', bookSchema);
