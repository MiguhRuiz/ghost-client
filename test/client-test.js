var test = require('tape')
var nock = require('nock')
var ghost = require('../')
var Client = require('../lib/client')

var url = 'http://api.ghost.test'
var url2 = 'http://api.myghostblog.test'
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

  client.posts(function (err, posts) {
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

  client.posts(function (err, posts) {
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

  client.tags(function (err, tags) {
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

  client.tags(function (err, tags) {
    t.error(err, 'should not be an error')
    t.ok(Array.isArray(tags), 'should be an array')
    t.end()
  })
})
