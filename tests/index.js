import test from 'ava'
import nock from 'nock'

import Client from '../index'

const token = 'mybeautytokenxd'
const endpoint = 'http://api.ghost.test/ghost/api/v0.1'
const opts = {
  reqheaders: {
    'Authorization': token
  }
}

test('The module should be initialized', async t => {
    let client = new Client()
    t.truthy(client, 'should exist')
})

test('Should return all posts using token authentication', async t => {
  let ghost = new Client({
    domain: endpoint,
    token
  })

  nock(endpoint, opts)
        .get('/posts')
        .reply(200, [])

  ghost.posts()
        .then(posts => t.is(typeof posts, Array, 'The response is an array'))
})
