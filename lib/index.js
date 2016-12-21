var api = require('./api')

class Client {
  constructor (params) {
    this.token = params.token || ''
    this.domain = params.domain || 'http://localhost:2368'
  }
  posts(params) {
    api.posts.getAll(this.domain, this.token, params)
  }
}

module.exports = Client
