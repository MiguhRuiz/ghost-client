## ghost-client          ![](https://circleci.com/gh/Galaxy42/ghost-client/tree/master.png?circle-token=:circle-token)  ![](https://circleci.com/gh/Galaxy42/ghost-client/tree/master.png?style=shield&circle-token=:circle-token)


A ghost client to get some data from the API.

[![NPM](https://nodei.co/npm/ghost-client.png)](https://nodei.co/npm/ghost-client/)


## Install

$ npm install ghost-client --save

## Usage

```js
var ghost = require('ghost-client')
var url = 'http://my-ghost-blog.com'
var clientId = 'ghost-frontend' // It has to be 'ghost-frontend' or 'ghost-admin'
var client = ghost.createClient({
  endpoint: url,
  clientId: clientId,
  clientSecret: clientSecret
})

Client.posts(function (err, posts) {
  // do something with posts
})
```

## License MIT

Copyright (c) 2015 - Miguel Ruiz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
