var request = require('request')
var qs = require('querystring')

function Client (options) {
  this.options = options || {}
  this.url = this.options.endpoint + '/ghost/api/v0.1' || 'http://localhost:2368' + '/ghost/api/v0.1'
  this.clientId = this.options.clientId || 'ghost-frontend'
  this.clientSecret = this.options.clientSecret
  this.token = this.options.token
}

Client.prototype._request = function (path, method, params, callback) {
  var uri = this.url + path

  if (typeof this.token !== 'undefined') {
    if (params !== {}) {
      uri = uri + qs.encode(params)
    }

    request({
      uri: uri,
      headers: {
        'Authorization': this.token
      },
      method: method
    }, function (err, res, body) {
      if (err) return callback(err)

      if (res.statusCode !== 200) return callback(new Error('An error ocurred during the request.'))

      callback(null, JSON.parse(body))
    })
  } else {
    var default_params = {
      clientId: this.clientId,
      clientSecret: this.clientSecret
    }

    uri = uri + '?' + qs.encode(default_params)

    if (params) {
      uri = uri + qs.encode(params)
    }

    request({
      uri: uri,
      method: method
    }, function (err, res, body) {
      if (err) return callback(err)

      if (res.statusCode !== 200) return callback(new Error('An error ocurred during the request.'))

      callback(null, JSON.parse(body))
    })
  }
}

Client.prototype.posts = function (params, callback) {
  this._request('/posts', 'GET', params, callback)
}

Client.prototype.tags = function (params, callback) {
  this._request('/tags', 'GET', params, callback)
}

Client.prototype.users = function (params, callback) {
  this._request('/users', 'GET', params, callback)
}

module.exports = Client
