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
