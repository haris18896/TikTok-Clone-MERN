# TikTok - BackEnd
type the below command, this command will start setting up our NodeJs, package.json file. and then answer the questions to complete the settings.
```sh
npm init
```

* in the questions, change the entry point from index.js to server.js

### `Questions`
    package name: (backend-tiktok)
    version: (1.0.0)
    description:
    entry point: (index.js) server.js
    test command:
    git repository:
    keywords:
    author: haris18896
    license: (ISC)

---

install these dependencies
```sh
npm i express mongoose
```

add the scripts to the `package.json` file
```json
// package.json
{
  "name": "backend-tiktok",
  "version": "1.0.0",
  "description": "type the below command, this command will start setting up our NodeJs, package.json file. and then answer the questions to complete the settings.\r ```sh\r npm init\r ```",
  "main": "server.js",
  "type": "module",

  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
  },
  "author": "haris18896",
  "license": "ISC"
}
```

after that 
1. go to the `mongoDB.com` and create a project.
2. create a database cluster.
3. add the database access user name and generate the password.
4. add Network Access, for now `Allow access from anywhere`
5. wait for the Network to be connected with the cluster.
6. setup the server.js file for ES6 in package.json by adding `"type" : "module"` below the `"main"`

---
---

## `creating API`

```js
// /backend/server.js
import express from 'express';
import mongoose from 'mongoose';


// app config

// middleware

// DB config

// API endpoints

// Listener
```



1. 







