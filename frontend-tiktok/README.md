# TikTok-MERN stack

## `Buttons and Text to the Video Component`
```sh
npm install react-ticker
```

```js
// /src/components/videoFooter/VideoFooter.js
<div className="videoFooter__ticker">
    <MusicNoteIcon
    className="videoFooter__icon"
    />

    <Ticker mode="smooth">
        {({ index }) => (
            <>
                <p>The song name goes here</p>
            </>
        )}
    </Ticker>
```
---
---
```js
// /src/components/videoFooter/VideoFooter.js
import React from 'react';
import './VideoFooter.css';
import IconButton from '@mui/material/IconButton';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from 'react-ticker'

function VideoFooter() {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3>@haris18896</h3>
                <p>some Description</p>

                <div className="videoFooter__ticker">
                    <MusicNoteIcon
                    className="videoFooter__icon"
                    />

                    <Ticker mode="smooth">
                        {({ index }) => (
                            <>
                                <p>The song name goes here</p>
                            </>
                        )}
                    </Ticker>
                </div>
            </div>
            <img
            className="videoFooter__record"
            src="https://static.thenounproject.com/png/934821-200.png"
            alt=""
            />
        </div>
    )
}

export default VideoFooter
```

```css
/* /src/components/videoFooter/VideoFooter.css */
.videoFooter{
    position: relative;
    color: white;
    bottom: 150px;
    margin-left: 40px;
    display: flex;
}

.videoFooter__text{
    flex: 1;
}

.videoFooter__text > p{
    padding-bottom: 20px;
}

.videoFooter__text > h3{
    padding-bottom: 20px;
}

.videoFooter__icon{
    position: absolute;
}

.videoFooter__ticker > .ticker{
    height: fit-content;
    margin-left: 30px;
    width: 70%
}

.videoFooter__ticker h1{
    padding-top: 7px;
}

.videoFooter__record{
    animation: spinTheRecord infinite 5s linear;
    height: 50px;
    filter: invert(1);  /* invert the colors from black to white */
    position: absolute;
    bottom: 0;
    right: 20px;
}

@keyframes spinTheRecord {
    from {
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }       
}

```

```js
// /src/components/videSidebar/VideoSidebar.js
import React, { useState } from 'react';
import './VideoSidebar.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';



function VideoSidebar() {

    const [ liked, setLiked ] = useState(false);

    return (
        <div className="videoSidebar">
            <div className="videoSidebar__button">
                {liked ? (
                <FavoriteIcon fontSize="large" onClick={e => setLiked(false)} />
                ) : (
                    <FavoriteBorderIcon fontSize="large" onClick={e => setLiked(true)} />
                )}
                <p>{liked ? 101 : 100}</p>
            </div>

            <div className="videoSidebar__button">
                <MessageIcon fontSize="large" />
                <p>223</p>
            </div>

            <div className="videoSidebar__button">
                <ShareIcon fontSize="large" />
                <p>12</p>
            </div>
        </div>
    )
}

export default VideoSidebar
```

    Steps:
    1. add a VideoFooter to the Video.js file
    2. add a Ticker to the VideoFooter.js file
    3. add spinning image at the bottom of the footer


now using `Props`

```js
// /src/components/videoSidebar/VideoSidebar.js
import React, { useState } from 'react';
import './VideoSidebar.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';



function VideoSidebar({ likes, shares, messages }) {

    const [ liked, setLiked ] = useState(false);

    return (
        <div className="videoSidebar">
            <div className="videoSidebar__button">
                {liked ? (
                <FavoriteIcon fontSize="large" onClick={e => setLiked(false)} />
                ) : (
                    <FavoriteBorderIcon fontSize="large" onClick={e => setLiked(true)} />
                )}
                <p>{liked ? likes + 1 : likes}</p>
            </div>

            <div className="videoSidebar__button">
                <MessageIcon fontSize="large" />
                <p>{messages}</p>
            </div>

            <div className="videoSidebar__button">
                <ShareIcon fontSize="large" />
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSidebar
```

at this point the number has been disappeared from the sidebar. so know we have to pass those 3 props `likes,shares and messages` to the `<VideoSidebar />` tag in the Video.js file.

```js
// /src/components/video/Videos.js
//.......
            <VideoSidebar likes={111} shares={222} messages={3211} />
```

do the same thing with the videoFooter.js, pass the data as props.

```js
// /src/components/videoFooter/VideoFooter.js
//.......
function VideoFooter({ channel, description, song }) {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3>@{channel}</h3>
                <p>{description}</p>

                <div className="videoFooter__ticker">
                    <MusicNoteIcon
                    className="videoFooter__icon"
                    />

                    <Ticker mode="smooth">
                        {({ index }) => (
                            <>
                                <p>{song}</p>
                            </>
                        )}
                    </Ticker>
//......
```

and then pass those values to the footer tag in the `Video.js` file
```js
// /src/components/video/Videos.js

//.....
            <VideoFooter channel='haris18896' description='MERN stack clone' song='song goes here'   />
            <VideoSidebar likes={111} shares={222} messages={3211} />
```

* also make the video url a prop in video.js file
* and then we can pass that url to the App.js file.

```js
// /src/components/video/Video.js
//....
function Videos({ url }) {
//.....

    return (
        <div className="video">
            <video
            onClick={handleVideoPress}
            // controls
            autoPlay
            className="video__player"
            loop
            ref={videoRef}
            src={url}
            >
            </video>
      //.....
      //.....
```

```js
// /src/app.js
      <div className="app__videos">
        <Videos url="https://player.vimeo.com/external/544599561.hd.mp4?s=58bcde0efb9df0a0b3208841050355c843db3e9f&profile_id=172&oauth2_token_id=57447761" />
        <Videos url="https://player.vimeo.com/external/469843704.sd.mp4?s=6227692eb5556f8f8dc39518b79cc8473a9de9d0&profile_id=165&oauth2_token_id=57447761" />
        <Videos url="https://player.vimeo.com/external/420568727.sd.mp4?s=bd4d6b75a5a1c960a222d3c9923574f70d122e0c&profile_id=165&oauth2_token_id=57447761" />
      </div>
```

* * now one extra trick is to pass those other props e.g `messages, shares, likes` in the VideoSidebar.js file and `channel, description, song` in the VideoFooter.js file we will pass it to the Video.js file. and then use it like below.
it's like 2 level prop drilling situation
```js
// /src/components/video/Video.js
function Videos({ url,channel, description, song, likes, shares, messages }) {
    //.......

    //.......
    <VideoFooter channel={channel} description={description} song={song}   />
    <VideoSidebar likes={likes} shares={shares} messages={messages} />
```

and know we only have to pass the data in the `App.js` file like given below.

```js
// /src/app.js
      <div className="app__videos">
        <Videos
         url="https://player.vimeo.com/external/544599561.hd.mp4?s=58bcde0efb9df0a0b3208841050355c843db3e9f&profile_id=172&oauth2_token_id=57447761" 
          channel="haris18896"
          description="This is a sample description"
          song="This is a sample song"
          likes={100}
          messages={10}
          shares={20}
         />
        
        <Videos
         url="https://player.vimeo.com/external/469843704.sd.mp4?s=6227692eb5556f8f8dc39518b79cc8473a9de9d0&profile_id=165&oauth2_token_id=57447761"
          channel="khan1234"
          description="This is a another description"
          song="This is a another song"
          likes={14}
          messages={5}
          shares={10}
          />
        
        <Videos
         url="https://player.vimeo.com/external/420568727.sd.mp4?s=bd4d6b75a5a1c960a222d3c9923574f70d122e0c&profile_id=165&oauth2_token_id=57447761" 
          channel="Musa987"
          description="This is a another description for song"
          song="This is a my ship"
          likes={908}
          messages={100}
          shares={201}
         />
     
      </div>
```


---
---

#### `Codes until now of FrontEnd`
```js
// /src/components/videoFooter.js
import React from 'react';
import './VideoFooter.css';
import IconButton from '@mui/material/IconButton';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import Ticker from 'react-ticker'

function VideoFooter({ channel, description, song }) {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3>@{channel}</h3>
                <p>{description}</p>

                <div className="videoFooter__ticker">
                    <MusicNoteIcon
                    className="videoFooter__icon"
                    />

                    <Ticker mode="smooth">
                        {({ index }) => (
                            <>
                                <p>{song}</p>
                            </>
                        )}
                    </Ticker>
                </div>
            </div>
            <img
            className="videoFooter__record"
            src="https://static.thenounproject.com/png/934821-200.png"
            alt=""
            />
        </div>
    )
}

export default VideoFooter
```
```css
/* /src/components/VideoFooter.css */
.videoFooter{
    position: relative;
    color: white;
    bottom: 150px;
    margin-left: 40px;
    display: flex;
}

.videoFooter__text{
    flex: 1;
}

.videoFooter__text > p{
    padding-bottom: 20px;
}

.videoFooter__text > h3{
    padding-bottom: 20px;
}

.videoFooter__icon{
    position: absolute;
}

.videoFooter__ticker > .ticker{
    height: fit-content;
    margin-left: 30px;
    width: 70%
}

.videoFooter__ticker h1{
    padding-top: 7px;
}

.videoFooter__record{
    animation: spinTheRecord infinite 5s linear;
    height: 50px;
    filter: invert(1);  /* invert the colors from black to white */
    position: absolute;
    bottom: 0;
    right: 20px;
}

@keyframes spinTheRecord {
    from {
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }       
}
```

```js
// /src/components/VideoSidebar.js
import React, { useState } from 'react';
import './VideoSidebar.css';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';



function VideoSidebar({ likes, shares, messages }) {

    const [ liked, setLiked ] = useState(false);

    return (
        <div className="videoSidebar">
            <div className="videoSidebar__button">
                {liked ? (
                <FavoriteIcon fontSize="large" onClick={e => setLiked(false)} />
                ) : (
                    <FavoriteBorderIcon fontSize="large" onClick={e => setLiked(true)} />
                )}
                <p>{liked ? likes + 1 : likes}</p>
            </div>

            <div className="videoSidebar__button">
                <MessageIcon fontSize="large" />
                <p>{messages}</p>
            </div>

            <div className="videoSidebar__button">
                <ShareIcon fontSize="large" />
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSidebar
```

```css
/* /src/components/VideoSidebar.css */
.videoSidebar{
    position: absolute;
    top: 50%;
    right: 10px;
    color: white;
}

.videoSidebar__button{
    padding: 20px;
    text-align: center;
}
```

```js
// /src/components/Video.js
import React, { useRef, useState } from 'react'
import './Videos.css';
import VideoFooter from '../videoFooter/VideoFooter';
import VideoSidebar from '../videoSidebar/VideoSidebar';
// import IconButton from '@mui/material/IconButton';
// import PlayCircleIcon from '@mui/icons-material/PlayCircle';


function Videos({ url,channel, description, song, likes, shares, messages }) {

    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);

    const handleVideoPress = () => {
        if(playing){
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    }

    return (
        <div className="video">
            <video
            onClick={handleVideoPress}
            // controls
            autoPlay
            className="video__player"
            loop
            ref={videoRef}
            src={url}
            >
            </video>

            {/* <div className="video__button" >
                <IconButton
                className="video__play__button"
                onClick={handleVideoPress}
                >
                    <PlayCircleIcon  />
                </IconButton>
            </div> */}

            <VideoFooter channel={channel} description={description} song={song}   />
            <VideoSidebar likes={likes} shares={shares} messages={messages} />
        </div>
    )
}

export default Videos

```
```css
/* /src/components/Video.css */
.video{
    position: relative;
    background-color: rgba(0,0,0,0.8);
    width: 100%;
    height: 100%;
    scroll-snap-align: start;
}

.video__player{
    object-fit: fill;
    width: 100%;
    height: 100%;
}

/* .video__button{
    position: fixed;
    bottom: 50%;
    display: flex;
    width: 100%;
    height: 100%;
}

.video_button .MuiIconButton-root{
    background-color: #fff;
    box-shadow: 0px 10px 53px 0px rgba(0,0,0,0.3) !important;
}

.video__play__button{
    padding: 1vw !important;
    color: #ffffff !important;
} */
```

```js
// /src/App.js
import './App.css';
import Videos from './components/videos/Videos';

function App() {
  return (
    <div className="app">

      <div className="app__videos">
        <Videos
         url="https://player.vimeo.com/external/544599561.hd.mp4?s=58bcde0efb9df0a0b3208841050355c843db3e9f&profile_id=172&oauth2_token_id=57447761" 
          channel="haris18896"
          description="This is a sample description"
          song="This is a sample song"
          likes={100}
          messages={10}
          shares={20}
         />
        
        <Videos
         url="https://player.vimeo.com/external/469843704.sd.mp4?s=6227692eb5556f8f8dc39518b79cc8473a9de9d0&profile_id=165&oauth2_token_id=57447761"
          channel="khan1234"
          description="This is a another description"
          song="This is a another song"
          likes={14}
          messages={5}
          shares={10}
          />
        
        <Videos
         url="https://player.vimeo.com/external/420568727.sd.mp4?s=bd4d6b75a5a1c960a222d3c9923574f70d122e0c&profile_id=165&oauth2_token_id=57447761" 
          channel="Musa987"
          description="This is a another description for song"
          song="This is a my ship"
          likes={908}
          messages={100}
          shares={201}
         />
     
      </div>
      
    </div>
  );
}

export default App;
```
```css
/* /src/App.css */
html{
    scroll-snap-type: y mandatory;
}

.app{
    height: 100vh;
    background-color: rgba(0,0,0,0.8);
    color: white;
    display: grid;
    place-items: center;
    
}

.app__videos{
    position: relative;
    height: 800px;
    border-radius: 20px;
    overflow: scroll;
    width: 80%;
    max-width: 500px;
    scroll-snap-type: y mandatory;

}

.app__videos::-webkit-scrollbar{
    display: none;      /* Chrome, Safari, Opera */
}

.app__videos{
    -ms-overflow-style: none;       /* IE and Edge */
    scrollbar-width: none;          /*Firefox*/
}
```








