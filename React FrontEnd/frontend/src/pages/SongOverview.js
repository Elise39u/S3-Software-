import Menu from '../components/NavMenu'
import GetAllSongs from "../components/Song/GetAllSongs";

function SongOverview() {
    return(
        <div>
            <Menu />
            <GetAllSongs />
        </div>
    )
}

export default SongOverview;