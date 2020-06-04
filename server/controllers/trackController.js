const mongoose = require('mongoose');
const Track = require('../models/trackModel');

const trackController = {};

trackController.getTracks = (req, res, next) => {
  const sortBy = req.query.sortBy || 'year';
  const order = req.query.order || 'desc';
  Track.find()
    .sort({ [sortBy]: [order] })
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
  if (Object.keys(req.body).length < 1)
    return next({
      message: 'error with incoming post request for createTrack middleware',
      status: '400',
    });
  if (req.body.type[0] === 'other') req.body.type = req.body.type[1] || 'other';
  else req.body.type = req.body.type[0];
  req.body.year = parseInt(req.body.year);

  const trackData = req.body;

  Track.create(trackData)
    .then(() => next())
    .catch((err) => next({ message: 'error creating Track', status: '500' }));
};

trackController.updateTrack = (req, res, next) => {
  if (Object.keys(req.body).length < 1)
    return next({
      message: 'error with incoming post request for updateTrack middleware',
      status: '400',
    });
  if (req.body.type[0] === 'other') req.body.type = req.body.type[1] || 'other';
  else req.body.type = req.body.type[0];
  req.body.year = parseInt(req.body.year);

  Track.findOneAndUpdate({ id: req.body._id }, req.body)
    .exec()
    .then(() => next())
    .catch((err) => next({ message: 'error creating Track', status: '500' }));
};

trackController.deleteTrack = (req, res, next) => {
  Track.findByIdAndDelete(req.params.id)
    .exec()
    .then((deleted) => {
      return next();
    })
    .catch((err) =>
      next({
        message: 'error in findOneAndDelete middleware',
        status: '500',
      })
    );
};

module.exports = trackController;
