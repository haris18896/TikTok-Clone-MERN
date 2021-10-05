import './App.css';
import Videos from './components/videos/Videos';

function App() {
  return (
    <div className="app">

      <div className="app__videos">
        <Videos
         url="https://player.vimeo.com/external/544599561.hd.mp4?s=58bcde0efb9df0a0b3208841050355c843db3e9f&profile_id=172&oauth2_token_id=57447761" 
          channel="haris18896"
          description="This is a sample description"
          song="This is a sample song"
          likes={100}
          messages={10}
          shares={20}
         />
        
        <Videos
         url="https://player.vimeo.com/external/469843704.sd.mp4?s=6227692eb5556f8f8dc39518b79cc8473a9de9d0&profile_id=165&oauth2_token_id=57447761"
          channel="khan1234"
          description="This is a another description"
          song="This is a another song"
          likes={14}
          messages={5}
          shares={10}
          />
        
        <Videos
         url="https://player.vimeo.com/external/420568727.sd.mp4?s=bd4d6b75a5a1c960a222d3c9923574f70d122e0c&profile_id=165&oauth2_token_id=57447761" 
          channel="Musa987"
          description="This is a another description for song"
          song="This is a my ship"
          likes={908}
          messages={100}
          shares={201}
         />
     
      </div>
      
    </div>
  );
}

export default App;
