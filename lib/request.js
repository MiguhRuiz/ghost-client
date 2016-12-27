/**
 * Created by miguhruiz on 26/12/16.
 */
const Fetch = require('isomorphic-fetch')
const Url = require('url')
const qs = require('querystring')

let request = function(uri, token, params) {
    let u = Url.parse(uri)
    if (params) {
        let up = Url.parse(`${uri}?${qs.stringify(params)}`)
        u = up
    }
    let url = u.format(u)

    let h = new Headers()
    h.append('Authorization', `Bearer ${token}`)

    try {
        let data = {
            statusCode: 200
        }
        Fetch(url, {headers: h})
            .then(d => {
                data.statusCode = d.status
                return d.json()
            })
            .then(result => {
                data.result = result
            })

        return data
    } catch (err) {
        console.error(err)
    }
}

module.exports = request