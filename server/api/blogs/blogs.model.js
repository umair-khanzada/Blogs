'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BlogsSchema = new Schema({
  name: String,
  comment: String,
  likes: [String]
});

module.exports = mongoose.model('Blogs', BlogsSchema);