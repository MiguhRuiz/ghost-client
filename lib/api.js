/**
 * Created by miguhruiz on 18/12/16.
 */

const Request = require('./request')

let blogURL = 'http://localhost:2368'
let uri = `${blogURL}/ghost/api/v0.1`

const api = {
    posts: {
       async getAll(token, params) {
            Request(`${uri}/posts`, token, params)
       }
    },
    tags: {},
    users: {}
}

module.exports = api