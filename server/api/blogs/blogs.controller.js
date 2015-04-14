'use strict';

var _ = require('lodash');
var Blogs = require('./blogs.model');

// Get list of blogss
exports.index = function(req, res) {
  Blogs.find(function (err, blogss) {
    if(err) { return handleError(res, err); }
    return res.json(200, blogss);
  });
};

// Get a single blogs
exports.show = function(req, res) {
  Blogs.findById(req.params.id, function (err, blogs) {
    if(err) { return handleError(res, err); }
    if(!blogs) { return res.send(404); }
    return res.json(blogs);
  });
};

// Creates a new blogs in the DB.
exports.create = function(req, res) {
  Blogs.create(req.body, function(err, blogs) {
    if(err) { return handleError(res, err); }
    return res.json(201, blogs);
  });
};

// Updates an existing blogs in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Blogs.findById(req.params.id, function (err, blogs) {
    if (err) { return handleError(res, err); }
    if(!blogs) { return res.send(404); }
    var updated = _.merge(blogs, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, blogs);
    });
  });
};

// Deletes a blogs from the DB.
exports.destroy = function(req, res) {
  Blogs.findById(req.params.id, function (err, blogs) {
    if(err) { return handleError(res, err); }
    if(!blogs) { return res.send(404); }
    blogs.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}