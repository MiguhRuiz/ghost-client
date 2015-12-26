var Client = require('./lib/client.js')

function createClient (options) {
  return new Client(options)
}

module.exports = {
  createClient: createClient
}
