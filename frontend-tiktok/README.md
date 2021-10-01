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





---
    Steps:
    1. make a container for the video to be contained, and give it a height of 800px
    2. adjust the width and height of the component to be 100% of the container
    3. to make the video play we will be using `ref`
    4. 
    5. 
    6. 
    7. 
    8. 

