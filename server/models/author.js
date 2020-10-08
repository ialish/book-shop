const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const authorSchema = new Schema({
  name: String
}, { versionKey: false });

module.exports = mongoose.model('author', authorSchema);
