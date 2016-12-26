/**
 * Created by miguhruiz on 26/12/16.
 */
const co = require('co')
const Fetch = require('isomorphic-fetch')
const Url = require('url')
const qs = require('querystring')

let request = co.wrap(function* (uri, token, params) {
    let u = Url.parse(uri)
    if (params) {
        let up = Url.parse(`${uri}?${qs.stringify(params)}`)
        u = up
    }
    let url = u.format(u)

    let h = new Headers()
    h.append('Authorization', `Bearer ${token}`)

    try {
        let data = yield Fetch(url, {headers: h})
            .then(d => { return d.json() })

        return data
    } catch (err) {
        return err
    }
})

module.exports = request