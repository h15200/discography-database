const mongoose = require('mongoose');
const Track = require('../models/trackModel');

const trackController = {};

trackController.getTracks = (req, res, next) => {
  console.log('getTracks');
};

// Track.find().exec().then((records) => {
//   if (records.length < 1)

// }

// ).catch(err => {

// })

// res.status(200).end();

module.exports = trackController;
