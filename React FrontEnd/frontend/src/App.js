import Menu from '../src/components/menu'
import SongInfo from '../src/components/songInfo'
import SongSummary from '../src/components/songSummary'
import '../src/css/songOverview.css'

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
