# ghost-client          [![](https://circleci.com/gh/Galaxy42/ghost-client/tree/master.png?circle-token=:circle-token)](https://circleci.com/gh/Galaxy42/ghost-client)

This module connects to your Ghost blog and gives you a list of what you need, posts, tags or users.

  > Ghost API is currently in Beta, you have to configure your blog to access the API and you have to get a token or a ID and a Secret Code to get what you want.

  > [See Ghost API Documentation](http://api.ghost.org/)

<center>[![NPM](https://nodei.co/npm/ghost-client.png)](https://nodei.co/npm/ghost-client/)</center>

<!-- TOC depthFrom:1 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [ghost-client          [![](https://circleci.com/gh/Galaxy42/ghost-client/tree/master.png?circle-token=:circle-token)](https://circleci.com/gh/Galaxy42/ghost-client)](#ghost-client-httpscirclecicomghgalaxy42ghost-clienttreemasterpngcircle-tokencircle-tokenhttpscirclecicomghgalaxy42ghost-client)
	- [Installation](#installation)
	- [Authentication: Client Authentication](#authentication-client-authentication)
	- [Authentication: User Authentication](#authentication-user-authentication)
	- [Available resources and methods](#available-resources-and-methods)
			- [Client.posts()](#clientposts)
			- [Client.tags()](#clienttags)
	- [License MIT](#license-mit)

<!-- /TOC -->

## Installation

To download the Ghost API Client that I've made simply download it via NPM. NPM is always going to have the latest stable version of it. Be free to add any flag after the command such as `--save` or `--save-dev`

```bash

$ npm install ghost-client

```

## Authentication: Client Authentication

To use the Client Authentication method described on the API Docs of Ghost you have to give the instance of the Ghost API Client a `clientId` and a `clientSecret`. [See Ghost Docs to find how to obtain it](http://api.ghost.org/docs/client-authentication)

```js

var ghost = require('ghost-client')
var Client = ghost.createClient({
  endpoint: 'http://my-ghost-blog.com',
  clientId: 'ghost-frontend',
  clientSecret: 'rabbitsareawesome'
})

```

## Authentication: User Authentication

To use the User Authentication method described on the API Docs of Ghost you have to give the instance of the Ghost API Client a Bearer Token. [See Ghost Docs to find how to obtain it](http://api.ghost.org/docs/user-authentication)

```js

var ghost = require('ghost-client')
var Client = ghost.createClient({
  endpoint: 'http://my-ghost-blog.com',
  token: 'Bearer 0X0X0X0X0X0X0X0X0X0X0X'
})

```

## Available resources and methods

`Client` means the variable that has the client to connect to the Ghost API correctly configured. See authentication again to see more about that variable.

#### Client.posts()

Brings posts list from a Ghost Blog.

```js

Client.posts(function (err, posts) {
  if (err) console.log(err)
  console.log(posts)
})

```
#### Client.tags()

Brings tags list from a Ghost Blog.

```js

Client.tags(function (err, tags) {
  if(err) console.log(err)
  console.log(tags)
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
