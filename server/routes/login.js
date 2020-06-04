const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('connected to "/login"');
  return res.status(200).end();
});

module.exports = router;
