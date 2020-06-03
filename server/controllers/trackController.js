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
  if (!req.body)
    return next({
      message: 'error with incoming post request for create new track',
      status: '400',
    });
  if (req.body.type[0] === 'other') req.body.type = req.body.type[1] || 'other';
  else req.body.type = req.body.type[0];
  req.body.year = parseInt(req.body.year);

  Track.create(req.body)
    .then(() => next())
    .catch((err) => next({ message: 'error creating Track', status: '500' }));
};

trackController.updateTrack = (req, res, next) => {
  if (!req.body)
    return next({
      message: 'error with incoming post request for update track',
      status: '400',
    });
  Track.findOne({ _id: req.params.id })
    .exec()
    .then((track) => {
      if (track === null)
        return next({ message: 'track not found', status: '500' });
      res.locals = track;
      return next();
    })
    .catch((err) =>
      next({ message: 'error finding id in update', status: '500' })
    );
};

module.exports = trackController;
