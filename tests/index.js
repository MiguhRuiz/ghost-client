import test from 'ava'
import Client from '../index'
test('The module should be initialized', async t => {
  const client = new Client()
  t.truthy(client, 'should exist')
})
