import Menu from './components/NavMenu'
import SongInfo from './components/SongInfo'
import SongSummary from './components/SongSummary'
import './css/SongOverview.css'

function App() {
  return (
    <div>
      <Menu />
        <h1 className="songTitle"> Odds and Ends</h1>
        <SongInfo/>
        <SongSummary/>
    </div>
  );
}

export default App;
