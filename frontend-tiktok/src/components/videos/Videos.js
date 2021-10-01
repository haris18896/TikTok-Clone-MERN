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
