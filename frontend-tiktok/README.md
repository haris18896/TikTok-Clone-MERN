# TikTok-MERN stack

## `Connecting Frontend too Backend`

`npm i axios`
```js
// /src/axios.js
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://bknd-tiktok.herokuapp.com/'
});

export default instance;
```


```js
// /src/App.js
import './App.css';
import React, { useEffect, useState } from 'react';
import Videos from './components/videos/Videos';
import axios from './axios.js'

function App() {

  const [video, setVideo] = useState([]);

  useEffect(() => {
      async function fetchData(){
          const response = await axios.get('/v2/posts');

          setVideo(response.data);
      }
      fetchData();
  },[])

  console.log(video);

  return (
    <div className="app">
      <div className="app__videos">
        {video.map(Video => (
          <Videos key={Video._id}
                  id={Video._id}
                  url={Video.url}
                  channel={Video.channel}
                  description={Video.description}
                  song={Video.song}
                  likes={Video.likes}
                  messages={Video.messages}
                  shares={Video.shares}
           />
        ))}
     
      </div>
      
    </div>
  );
}

export default App;
```

* `likes` has to be a `Number` not a `String`, so change that in the `dbModel.js` file.

1. create a file `axios.js`
2. use `useEffect` in the App.js file to 