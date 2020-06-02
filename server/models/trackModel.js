const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trackSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  artist: { type: String },
  yearReleased: { type: Number },
  label: { type: Number },
});

const Track = mongoose.model('Track', trackSchema);

module.exports = Track;
