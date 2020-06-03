const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trackSchema = new Schema({
  name: { type: String, required: true },
  artist: { type: String, required: true },
  type: { type: String, required: true },
  year: { type: Number, required: true },
  link: { type: String },
});

const Track = mongoose.model('Track', trackSchema);

module.exports = Track;
