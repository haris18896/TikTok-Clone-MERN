import React, { useRef } from 'react'
import './Videos.css'

function Videos() {

    const videoRef = useRef(null);

    return (
        <div className="video">
            <video
            className="video__player"
            loop
            ref={videoRef}
            src="https://player.vimeo.com/external/544599561.hd.mp4?s=58bcde0efb9df0a0b3208841050355c843db3e9f&profile_id=172&oauth2_token_id=57447761"
            >
            </video>

            {/* video Footer */}

            {/* Video side bar */}
        </div>
    )
}

export default Videos
