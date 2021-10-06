import './App.css';
import React, { useEffect, useState } from 'react';
import Videos from './components/videos/Videos';
import axios from './axios.js'

function App() {

  const [video, setVideo] = useState([]);

  useEffect(() => {
      async function fetchData(){
          const response = await axios.get('/v2/posts');

          setVideo(response.data);
      }
      fetchData();
  },[])

  console.log(video);

  return (
    <div className="app">
      <div className="app__videos">
        {video.map(Video => (
          <Videos key={Video._id}
                  id={Video._id}
                  url={Video.url}
                  channel={Video.channel}
                  description={Video.description}
                  song={Video.song}
                  likes={Video.likes}
                  messages={Video.messages}
                  shares={Video.shares}
           />
        ))}
     
      </div>
      
    </div>
  );
}

export default App;
