import './App.css';
import Videos from './components/videos/Videos';

function App() {
  return (
    <div className="App">
      <h1>tiktok</h1>

      <div className="app__videos">
        <Videos />
        <Videos />
      </div>
    </div>
  );
}

export default App;
