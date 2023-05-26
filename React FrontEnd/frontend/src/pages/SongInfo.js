import Menu from '../components/NavMenu'
import SongDetails from '../components/SongDetails'
import SongSummary from '../components/SongSummary'

function SongInfo(props) {
    console.log(props)

    return(
        <div>
            <Menu/>
            <h1>Song info for:</h1>
        </div>
    )
}

export default SongInfo