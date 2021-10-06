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

`npm i -g nodemon`

```js
// /backend/server.js
import express from 'express';
import mongoose from 'mongoose';

// app config
const app = express();
const port = process.env.PORT || 9000;

// middleware


// DB config


// API endpoints
app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
})

// Listener
app.listen(port, () => {
    console.log(`Server is listening on localhost: ${port}`);
});
```



1. to run the backend server we need to install `nodemon`
2. before that add a listener to the server.js file.
3. to run the server `nodemon server.js`. it will be working at this point.

this is everything required to start the backend, the other things are just to add endpoints and middleware and DB.

---
---

## `setting up the DB on server.js`

`npm i cors`

```js
// /backend/server.js
//....
import cors from 'cors';
//....
// middleware
app.use(express.json());
app.use(cors());
```

```js
// /backend/server.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

// app config
const app = express();
const port = process.env.PORT || 9000;

const connection_url = `mongodb+srv://admin:3E5eC0T3EkSX9xyI@cluster0.m4508.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

// middleware
app.use(express.json());
app.use(cors());

// DB config
mongoose.connect(connection_url, 
    async(err) => {
        if(err) throw err;
        console.log('DB connected');
    });

// API endpoints
app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
})

// Listener
app.listen(port, () => {
    console.log(`Server is listening on localhost: ${port}`);
});
```

1. install cors
2. add the middle wares to the server.js file
3. we will need Postman to test our API.
4. make a connection to the database. by going to the `mongoDB.com` and click on connect in the database cluster.
5. make a connection in the server.js file to the database by adding the mongoose.connect method to DB config.

---
---

## `creating database`
in the `data.js` file is where our database data will be stored. this `data.js` file is going to be an array of objects.

it's the best way to visualize the NoSQL data like given below.

```js
// /backend/data.js
const data = [
    {
        url: "https://player.vimeo.com/external/544599561.hd.mp4?s=58bcde0efb9df0a0b3208841050355c843db3e9f&profile_id=172&oauth2_token_id=57447761" ,
          channel: "haris18896",
          description: "This is a sample description",
          song: "This is a sample song",
          likes: "100",
          messages: "10",
          shares: "20",
    },
    {
        url: "https://player.vimeo.com/external/469843704.sd.mp4?s=6227692eb5556f8f8dc39518b79cc8473a9de9d0&profile_id=165&oauth2_token_id=57447761",
        channel: "khan1234",
        description: "This is a another description",
        song: "This is a another song",
        likes: "14",
        messages: "5",
        shares: "10",
    },
    {
        url: "https://player.vimeo.com/external/420568727.sd.mp4?s=bd4d6b75a5a1c960a222d3c9923574f70d122e0c&profile_id=165&oauth2_token_id=57447761" ,
        channel: "Musa987",
        description: "This is a another description for song",
        song: "This is a my ship",
        likes: "908",
        messages: "100",
        shares: "201",
    },
]

export default data;
```

here we are going to use this data for now. we have to make an endpoint for this data.

```js
// /backend/server.js
//.....
// API endpoints
app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
});

app.get('/v1/posts/', (req, res) => {
    // go in to the data file and get the data
    res.status(200).send(Data);
});
```

this is a good way to start with the API.

now it's time to get back to the mongoDB

```js
// server.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import Data from './data.js';

// app config
const app = express();
const port = process.env.PORT || 9000;

// middleware
app.use(express.json());
app.use(cors());

// DB config
const connection_url = `mongodb+srv://admin:3E5eC0T3EkSX9xyI@cluster0.m4508.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect(connection_url, 
    async(err) => {
        if(err) throw err;
        console.log('DB connected');
    });

// API endpoints
app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
});

app.get('/v1/posts/', (req, res) => {
    // go in to the data file and get the data
    res.status(200).send(Data);
});

// Listener
app.listen(port, () => {
    console.log(`Server is listening on localhost: ${port}`);
});
```

* * Now it's time to add `dbModel.js` file to the backend for the database.
```js
// /backend/dbModel.js
import mongoose from 'mongoose';

const tiktokSchema = new mongoose.Schema({
    url: String,
    channel: String,
    description: String,
    song: String,
    likes: String,
    messages: String,
    shares: String,
})

// collection inside the database
export default mongoose.model('tiktokVideos', tiktokSchema);
```

import the above database into the `server.js` file as it's a default export so we can name it anything in the server.js file like `import Videos from './dbModel.js'`

```js
// /server.js
//.....
app.post('/v2/posts/', (req, res) => {
    // create a new post, to add data to the database
    // it will let us ADD  a video document to the collection
    const dbVideos = req.body
    // saving data to our database
    // and this is the time of handling any kind of errors
    Videos.create(dbVideos, (err, data) => {
        if(err){
            res.status(500).send(err)
        }else{
            res.status(201).send(data)
        }
        // now we can check it out in the Postman
    })
})
//.....
```

to check the data in the postman as `get` request we have to add a `get` request to the server.js file.

```js
// server.js
//....
// this code will fetch the data from the database.

app.get('/v2/posts/', (req, res) => {
    Videos.find({}, (err, data) => {
        if(err){
            res.status(500).send(err)
        }else{
            res.status(200).send(data)
        }
    })
})
//....
```

there is another middle ware that has to be run before every `api call`.
it's just like `cors`
```js
app.use((req, res, next) => {
    // * means allow all origins from anywhere
    res.header('Access-Control-Allow-Origin', '*');   
    res.header('Access-Control-Allow-Headers', '*');
    next();
});
```

1. create a new file called `data.js` for database
2. import data file to the server.js `import Data from './data.js';` we do have to say './data.js` because we are in the `backend` folder and using node
3. pull the data from this data.js file as an endpoint
4. no go back and add the mongoDB connection to the server.js file
5. create a file called `dbModel.js` for mongoDB.
6. import this model to the `server.js` file as `import Videos from './dbModel.js';`  as it's a default export.
7. add a `get` request to the server.js file  so that we can check it out in the postman.
8. deploy to heroku


## `Deploy to Heroku`

first install heroku cli.

open the `Terminal` and install heroku cli outside the master branch
`curl https://cli-assets.heroku.com/install.sh | sh`

1. install heroku cli
2. `curl https://cli-assets.heroku.com/install.sh | sh`
3. `git init`
4. `heroku git:remote -a bknd-tiktok`
5. "delete package.lock.json"
6. `heroku run npm install`
7. `git add .`
8. `git commit -am "deploying"`
9. `heroku logs --tail`
10. `git push heroku master`
11. Go to the `heroku.com` -> settings -> find `Domains`, and click on the link that says 'your app can be found here' that's our backend link.









