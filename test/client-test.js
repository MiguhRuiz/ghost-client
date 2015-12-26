var test = require('tape')
var ghost = require('../')

test('should create a client', function (t) {
  t.ok(ghost.createClient, 'should exist')
  t.equals(typeof ghost.createClient, 'function', 'should be a function')
  t.end()
})
