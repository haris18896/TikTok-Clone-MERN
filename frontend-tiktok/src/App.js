import './App.css';
import Videos from './components/videos/Videos';

function App() {
  return (
    <div className="app">

      <div className="app__videos">
        <Videos />
        <Videos />
        <Videos />
      </div>
      
    </div>
  );
}

export default App;
