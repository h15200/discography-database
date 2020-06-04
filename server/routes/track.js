const express = require('express');
const trackController = require('../controllers/trackController');
const router = express.Router();

router.get('/', trackController.getTracks, (req, res) => {
  return res.status(200).json(res.locals.tracks);
});

router.post('/', trackController.createTrack, (req, res) => {
  return res.redirect('../');
});

router.post('/update', trackController.updateTrack, (req, res) => {
  return res.redirect('../../');
});

router.delete('/:id', trackController.deleteTrack, (req, res) => {
  return res.redirect(303, '../');
});

module.exports = router;
