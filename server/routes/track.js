const express = require('express');
const trackController = require('../controllers/trackController');
const router = express.Router();

router.get('/', trackController.getTracks, (req, res) => {
  return res.status(200).json(res.locals.tracks);
});

router.post('/', trackController.createTrack, (req, res) => {
  return res.redirect('../');
});

router.post('/update/:id', trackController.updateTrack, (req, res) => {
  console.log('res.locals -> ', res.locals);
  return res.end();
});

module.exports = router;
