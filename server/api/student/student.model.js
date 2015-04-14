'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var StudentSchema = new Schema({
  name: String,
  class: String,
  age: Number
});

module.exports = mongoose.model('Student', StudentSchema);