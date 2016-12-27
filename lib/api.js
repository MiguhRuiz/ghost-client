/**
 * Created by miguhruiz on 26/12/16.
 */
const Request = require('./request')
const co = require('co')

const api = {
    posts: {
        getAll: function(domain, token, params) {
            let uri = `${domain}/ghost/api/v0.1`
            let response = Request(`${uri}/posts`, token, params)

            return response
        },
        getOneById: function(domain, token, id, params) {
            let uri = `${domain}/ghost/api/v0.1`
            let response = Request(`${uri}/posts/${id}`, token, params)

            return response
        },
        getOneBySlug: function(domain, token, slug, params) {
            let uri = `${domain}/ghost/api/v0.1`
            let response = Request(`${uri}/posts/slug/${slug}`, token, params)

            return response
        }
    },
    tags: {
        getAll: function(domain, token, params) {
            let uri = `${domain}/ghost/api/v0.1`
            let response = Request(`${uri}/tags`, token, params)

            return response
        },
        getOneById: function(domain, token, id, params) {
            let uri = `${domain}/ghost/api/v0.1`
            let response = Request(`${uri}/tags/${id}`, token, params)

            return response
        },
        getOneBySlug: function(domain, token, slug, params) {
            let uri = `${domain}/ghost/api/v0.1`
            let response = Request(`${uri}/tags/slug/${slug}`, token, params)

            return response
        }
    },
    users: {
        getAll: function(domain, token, params) {
            let uri = `${domain}/ghost/api/v0.1`
            let response = Request(`${uri}/users`, token, params)

            return response
        },
        getOneById: function(domain, token, id, params) {
            let uri = `${domain}/ghost/api/v0.1`
            let response = Request(`${uri}/users/${id}`, token, params)

            return response
        },
        getOneBySlug: function(domain, token, slug, params) {
            let uri = `${domain}/ghost/api/v0.1`
            let response = Request(`${uri}/users/slug/${slug}`, token, params)

            return response
        },
        getOneByEmail: function(domain, token, email, params) {
            let uri = `${domain}/ghost/api/v0.1`
            let response = Request(`${uri}/users/email/${email}`, token, params)

            return response
        }
    }
}

module.exports = api