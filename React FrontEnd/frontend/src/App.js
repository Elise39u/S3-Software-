import Menu from './components/NavMenu'
import SongDetails from './components/SongDetails'
import SongSummary from './components/SongSummary'
import './css/Song/SongOverview.css'

function App() {
  return (
    <div>
      <Menu />
        <h1 className="songTitle"> Odds and Ends</h1>
        <SongDetails/>
        <SongSummary/>
    </div>
  );
}

export default App;
