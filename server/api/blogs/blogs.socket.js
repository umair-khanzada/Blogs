/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Blogs = require('./blogs.model');

exports.register = function(socket) {
  Blogs.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Blogs.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('blogs:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('blogs:remove', doc);
}