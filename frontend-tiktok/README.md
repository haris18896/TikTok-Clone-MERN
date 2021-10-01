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



    Steps:
    1. add a VideoFooter to the Video.js file
    2. add a Ticker to the VideoFooter.js file
    3. add spinning image at the bottom of the footer
    4.
    5.
