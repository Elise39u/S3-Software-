import React from "react"
import "../css/GetAllSongs.css"

class GetAllSongs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            LoadingData: false,
            songs: []
        }
    }

    componentDidMount() {
        fetch("https://localhost:7261/Song")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    songs: json,
                    LoadingData: true
                })
            })
    }

    render() {
        if(!this.state.LoadingData) {
            return(
                <div>
                    <h1>Hold on were getting the songs from the api</h1>
                    <p>Our mikudayos are hard at work</p>
                </div>
            )
        }
        return (
            <div>
                <h1 className="introText">Found the following songs for you in the libary</h1>
                <div className="Songview flex-container">
                {
                    this.state.songs.sort((song) => song.songName).map((song) => {
                        //Add <a link that adds as get request song for to the div> with help of song.songId
                        //Add also later vocaloid images instead of their names.
                            return(
                            <div className="mainView" key={song.songId}>
                                <div className="songJacket">
                                    <div className="jacket">
                                        <img className="jacketImg" alt="album jacket" src={song.songAlbumImg}/>
                                    </div>
                                </div>
                                <div className="musicName">
                                    <span><b>Song name: {song.songName}</b></span>
                                </div>
                                <div className="musicProducer">
                                    <span><b>Song producer: Ryo supercell</b></span>
                                </div>
                                <div className="diffcultys">
                                    <span>*</span>
                                    <span className="easy"></span>
                                    <span className="normal"></span>
                                    <span className="hard"></span>
                                    <span className="extreme"></span>
                                    <span className="extraExtreme"></span>
                                </div>
                                <div className="vocals">
                                    <span>Vocals:</span>
                                    <div className="vocalFirst">
                                        <b>{song.songArtist}</b>
                                    </div>
                                </div>
                            </div>
                            )
                        }
                    )}
                </div>
            </div>
        )
    }
}

export default GetAllSongs;
/*
    <div className="vocalSecond"></div>
    <div className="vocalThird"></div>
 */