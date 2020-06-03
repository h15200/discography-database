const mongoose = require('mongoose');
const Track = require('../models/trackModel');

const trackController = {};

trackController.getTracks = (req, res, next) => {
  Track.find()
    .exec()
    .then((results) => {
      res.locals.tracks = results;

      return next();
    })
    .catch((err) => {
      return next({
        message: 'error in trackController.getTracks',
        status: 500,
      });
    });
};

trackController.createTrack = (req, res, next) => {
  console.log('req body -> ', req.body);

  return next();
};

module.exports = trackController;
