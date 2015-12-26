var request = require('client-request')
var qs = require('querystring')

function Client (options) {
  this.options = options || {}
  this.url = this.options.endpoint + '/ghost/api/v0.1' || 'http://localhost:2368' + '/ghost/api/v0.1'
  this.Authorization = this.options.Authorization || 'Bearer 0X0X0X0X0X0X0X0'
}

Client.prototype._request = function (path, method, params, callback) {
  var uri = this.url + path
  var token = this.Authorization

  if (params) {
    uri = uri + '?' + qs.encode(params)
  }

  request({
    uri: uri,
    method: method,
    json: true,
    headers: {
      'Authorization': token
    }
  }, function (err, res, body) {
    if (err) return callback(err)

    if (res.statusCode !== 200) return callback(new Error('An error ocurred during the request. Please try again C:'))

    callback(null, body)
  })
}

Client.prototype.posts = function (callback) {
  this._request('/posts', 'GET', null, callback)
}

module.exports = Client
