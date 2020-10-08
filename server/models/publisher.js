const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const publisherSchema = new Schema({
  name: String
}, { versionKey: false });

module.exports = mongoose.model('publisher', publisherSchema);
