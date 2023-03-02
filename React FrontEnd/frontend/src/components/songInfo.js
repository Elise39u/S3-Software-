import React from "react";
import '../css/songOverview.css'
import Album from '../img/OddsandEndsAlbumCover.png'
import Miku from '../img/OddsandEndsMiku.png'
import Logo from '../img/OddsandEndsLogo.png'

class SongInfo extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <div>
                <h2 className="ogTitle"> Original</h2>
                <div className="imgRight albumCover">
                    <img src={Album}/>
                </div>
                <iframe className="ytVideo" width="560" height="315" src="https://www.youtube.com/embed/dGNoCICGmo0"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen> </iframe>
                <p className="videoInfo"> One note: This song is not the OG song.
                    <br /> The og is private on niconico. <br />
                    So here is the song under a different pv with thanks to googoo888 </p>
                <div className="imgRight titleSong">
                    <img src={Logo}/> <br/>
                    <img src={Miku}/>
                </div>
            </div>
        )
    }
}

export default SongInfo