const express = require('express');
const trackController = require('../controllers/trackController');
const router = express.Router();

// dev dummy record
// Track.create({
//   name: 'best song ever',
//   artist: 'h',
//   yearReleased: '2010',
//   type: 'pop',
//   label: 'leadingTone Records',
// });

// router.get
router.get('/', trackController.getTracks, (req, res) => {
  return res.status(200).json(res.locals.tracks);
});

router.post('/', trackController.createTrack, (req, res) => {
  return res.redirect('../');
});

module.exports = router;
