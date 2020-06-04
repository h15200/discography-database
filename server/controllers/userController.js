const mongoose = require('mongoose');
const User = require('../models/userModel');

const userController = {};

userController.isLogged = (req, res, next) => {
  // check token
  console.log('checking for auth. auth passes...');
  return next();

  // if bad, redirect to '../login'
};

module.exports = userController;
