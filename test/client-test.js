var test = require('tape')
var ghost = require('../')
var Client = require('../lib/client')

test('should create a client', function (t) {
  t.ok(ghost.createClient, 'should exist')
  t.equals(typeof ghost.createClient, 'function', 'should be a function')

  var client = ghost.createClient()
  t.ok(client instanceof Client, 'should be instance of Client')
  t.end()
})
