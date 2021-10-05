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
                <FavoriteIcon fontSize="large" />
                ) : (
                    <FavoriteBorderIcon fontSize="large" />
                )}
                <p>100</p>
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
