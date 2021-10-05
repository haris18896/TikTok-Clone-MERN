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


    Steps:
    1. add a VideoFooter to the Video.js file
    2. add a Ticker to the VideoFooter.js file
    3. add spinning image at the bottom of the footer


