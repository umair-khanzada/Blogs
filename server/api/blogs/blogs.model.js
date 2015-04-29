'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var BlogsSchema = new Schema({
  name: String,
  description: String,
  comment: String,
  commentName: String,
  likes: [String]
});

module.exports = mongoose.model('Blogs', BlogsSchema);