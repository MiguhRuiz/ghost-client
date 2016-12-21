/**
 * Created by miguhruiz on 18/12/16.
 */

const Request = require('./request')

const api = {
  posts: {
    async getAll (domain, token, params) {
      let uri = `${domain}/ghost/api/v0.1`
      Request(`${uri}/posts`, token, params)
    },
    async getOneById (domain, token, id, params) {
      let uri = `${domain}/ghost/api/v0.1`
      Request(`${uri}/posts/${id}`, token, params)
    },
    async getOneBySlug (domain, token, slug, params) {
      let uri = `${domain}/ghost/api/v0.1`
      Request(`${uri}/posts/slug/${slug}`, token, params)
    }
  },
  tags: {
    async getAll (domain, token, params) {
      let uri = `${domain}/ghost/api/v0.1`
      Request(`${uri}/tags`, token, params)
    },
    async getOneById (domain, token, id, params) {
      let uri = `${domain}/ghost/api/v0.1`
      Request(`${uri}/tags/${id}`, token, params)
    },
    async getOneBySlug (domain, token, slug, params) {
      let uri = `${domain}/ghost/api/v0.1`
      Request(`${uri}/tags/slug/${slug}`, token, params)
    }
  },
  users: {
    async getAll (domain, token, params) {
      let uri = `${domain}/ghost/api/v0.1`
      Request(`${uri}/users`, token, params)
    },
    async getOneById (domain, token, id, params) {
      let uri = `${domain}/ghost/api/v0.1`
      Request(`${uri}/users/${id}`, token, params)
    },
    async getOneBySlug (domain, token, slug, params) {
      let uri = `${domain}/ghost/api/v0.1`
      Request(`${uri}/users/slug/${slug}`, token, params)
    },
    async getOneByEmail (domain, token, email, params) {
      let uri = `${domain}/ghost/api/v0.1`
      Request(`${uri}/users/email/${email}`, token, params)
    }
  }
}

module.exports = api
