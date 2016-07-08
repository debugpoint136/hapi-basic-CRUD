'use strict';

// Include Mongoose ORM to connect with database
var mongoose = require('mongoose');

// Making connection with `restdemo` database in your local machine
mongoose.connect('mongodb://localhost/restdemo');

// Importing `user` model from `models/user.js` file
var UserModel = require('./models/user');

function core(server, options, next) {
  //Load Routes
  server.route(require('./routes')(UserModel));

  // Core Logic

  return next();
}

core.attributes = {
  name: 'core'
}

module.exports = core;
