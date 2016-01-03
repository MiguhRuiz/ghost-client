var test = require('tape')
var nock = require('nock')
var ghost = require('../')
var Client = require('../lib/client')

// Created 3 url's to pass the test because of nock module specifications
var url = 'http://api.ghost.test'
var url2 = 'http://api.myghostblog.test'
var url3 = 'http://api.ghostblog.test'

var clientId = 'ghost-frontend'
var clientSecret = 'catsarecool'
var token = 'Bearer 0X0X0X'

test('should create a client', function (t) {
  t.ok(ghost.createClient, 'should exist')
  t.equals(typeof ghost.createClient, 'function', 'should be a function')

  var client = ghost.createClient()
  t.ok(client instanceof Client, 'should be instance of Client')
  t.end()
})

test('should list posts using client authentication', function (t) {
  var client = ghost.createClient({ endpoint: url, clientId: 'ghost-frontend', clientSecret: clientSecret })
  t.equals(typeof client.posts, 'function', 'should be a function')

  nock(url + '/ghost/api/v0.1')
      .get('/posts' + '?' + 'clientId=' + clientId + '&clientSecret=' + clientSecret)
      .reply('200', [])

  client.posts({}, function (err, posts) {
    t.error(err, 'should not be an error')
    t.ok(Array.isArray(posts), 'should be an array')
    t.end()
  })
})

test('should list posts using user authentication', function (t) {
  var client = ghost.createClient({ endpoint: url, token: token })
  t.equals(typeof client.posts, 'function', 'should be a function')

  nock(url + '/ghost/api/v0.1', {
    reqheaders: {
      'Authorization': token
    }
  })
    .get('/posts')
    .reply('200', [])

  client.posts({}, function (err, posts) {
    t.error(err, 'should not be an error')
    t.ok(Array.isArray(posts), 'should be an array')
    t.end()
  })
})

test('should list tags using client authentication', function (t) {
  var client = ghost.createClient({ endpoint: url2, clientId: 'ghost-frontend', clientSecret: clientSecret })
  t.equals(typeof client.tags, 'function', 'should be a function')

  nock(url2 + '/ghost/api/v0.1')
      .get('/tags' + '?' + 'clientId=' + clientId + '&clientSecret=' + clientSecret)
      .reply('200', [])

  client.tags({}, function (err, tags) {
    t.error(err, 'should not be an error')
    t.ok(Array.isArray(tags), 'should be an array')
    t.end()
  })
})

test('should list tags using user authentication', function (t) {
  var client = ghost.createClient({ endpoint: url, token: token })
  t.equals(typeof client.tags, 'function', 'should be a function')

  nock(url + '/ghost/api/v0.1', {
    reqheaders: {
      'Authorization': token
    }
  })
  .get('/tags')
  .reply('200', [])

  client.tags({}, function (err, tags) {
    t.error(err, 'should not be an error')
    t.ok(Array.isArray(tags), 'should be an array')
    t.end()
  })
})

test('should list users using client authentication', function (t) {
  var client = ghost.createClient({ endpoint: url3, clientId: 'ghost-frontend', clientSecret: clientSecret })
  t.equals(typeof client.users, 'function', 'should be a function')

  nock(url3 + '/ghost/api/v0.1')
      .persist()
      .get('/users' + '?' + 'clientId=' + clientId + '&clientSecret=' + clientSecret)
      .reply('200', [])

  client.users({}, function (err, users) {
    t.error(err, 'should not be an error')
    t.ok(Array.isArray(users), 'should be an array')
    t.end()
  })
})

test('should list users using user authentication', function (t) {
  var client = ghost.createClient({ endpoint: url3, token: token })
  t.equals(typeof client.users, 'function', 'should be a function')

  nock(url3 + '/ghost/api/v0.1', {
    reqheaders: {
      'Authorization': token
    }
  })
  .get('/users')
  .reply('200', [])

  client.users({}, function (err, users) {
    t.error(err, 'should not be an error')
    t.ok(Array.isArray(users), 'should be an array')
    t.end()
  })
})
