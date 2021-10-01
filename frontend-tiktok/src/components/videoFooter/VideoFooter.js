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
