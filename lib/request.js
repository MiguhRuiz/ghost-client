/**
 * Created by miguhruiz on 18/12/16.
 */
const Fetch = require('isomorphic-fetch')
const Url = require('url')
const qs = require('querystring')

async function request(uri, token, params) {
    let u = Url.parse(uri)
    if(params) {
        let up = Url.parse(`${uri}?${qs.stringify(params)}`)
        u = up
    }
    let url = u.format(u)

    let h = new Headers()
    h.append('Authorization', `Bearer ${token}`)

    try {
        let data = await fetch(url, {headers: h})
            .then(d => {
                return d.json()
                    .then( j =>
                        console.log(j)
                    )
            }
        )
        return data
    } catch(err) {
        return err
    }
}

module.exports = request