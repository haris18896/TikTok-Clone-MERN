# TikTok-MERN stack

## `Video component`

to center everything  use `display:gird; and place-items: center;`
```css
// /src/App.css
html{
    scroll-snap-type: y mandatory;
}

.app{
    height: 100vh;
    background-color: #000;
    color: white;
    display: grid;
    place-items: center;
}
```

after that we are going to contained the video in a container called `app__videos`
```css
/* /src/App.css */
/* ............. */
.app__videos{
    position: relative;
    height: 800px;
    border-radius: 20px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    -ms-border-radius: 20px;
    -o-border-radius: 20px;
    overflow: scroll;
    width: 80%;
    max-width: 500px;
    scroll-snap-type: y mandatory;
}
```

after that we are going to hide the scroll bars.
```css
/* /src/App.css */
.app__videos::-webkit-scrollbar{
    display: none;      /* Chrome, Safari, Opera */
}

.app__videos{
    -ms-overflow-style: none;       /* IE and Edge */
    scrollbar-width: none;          /*Firefox*/
}
```

for now the App.css file is
```css
html{
    scroll-snap-type: y mandatory;
}

.app{
    height: 100vh;
    background-color: #000;
    color: white;
    display: grid;
    place-items: center;
}

.app__videos{
    position: relative;
    height: 800px;
    border-radius: 20px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    -ms-border-radius: 20px;
    -o-border-radius: 20px;
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
adjusting the width and height of the component to be 100% of the parent container
```css
/* /src/components/Video.css */
.video{
    position: relative;
    background-color: #fff;
    width: 100%;
    height: 100%;
    scroll-snap-align: start;
}

.video__player{
    object-fit: fill;
    width: 100%;
    height: 100%;
}
```

to make the video play what we will be using is `ref` which is React JS hook. it's like a pointer, every time you click on a video you are pointing on it to play, so that's what `Ref` is going to do for us.

to `play and pause` the video on click, we have to define a function for that.and that functionality cna be achieved by using `useRef`.

on of doing that is to do it like this
```js
// /src/components/video/Video.js

//.......

    const handleVideoPress = () => {
        // if video is playing, pause it
        // else play it
        if (videoRef.current.paused) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    }

//.....
```

the other way we will have to use `useState`
```js
// /src/components/video/Video.js
//.....
    const handleVideoPress = () => {
        // if video is playing, pause it
        // else play it
        if(playing){
            videoRef.current.pause();
            setPlaying(false);
        } else {
            videoRef.current.play();
            setPlaying(true);
        }
    }
//.....
//.....
```

we can also add a button to that function.and for that we will have to use `material ui`
```sh
npm install @mui/material
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/material @mui/styled-engine-sc styled-components
npm install @mui/icons-material

```

```js
// /src/components/video/Video.js
import React, { useRef, useState } from 'react'
import './Videos.css';
import VideoFooter from '../videoFooter/VideoFooter';
import VideoSidebar from '../videoSidebar/VideoSidebar';


function Videos() {

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
            // autoplay
            className="video__player"
            loop
            ref={videoRef}
            src="https://player.vimeo.com/external/544599561.hd.mp4?s=58bcde0efb9df0a0b3208841050355c843db3e9f&profile_id=172&oauth2_token_id=57447761"
            >
            </video>

            {/* video Footer */}
            <VideoFooter />
            {/* Video side bar */}
            <VideoSidebar />
        </div>
    )
}

export default Videos
```


---
    Steps:
    1. make a container for the video to be contained, and give it a height of 800px
    2. adjust the width and height of the component to be 100% of the container
    3. to make the video play we will be using `ref`
    4. add an `onClick` handle called `handleVideoPress`
    5. add a function if the video is playing, pause it, else play it, also add a button from material UI.


