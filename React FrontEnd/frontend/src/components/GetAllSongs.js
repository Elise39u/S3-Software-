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
                            return(
                            <div className="Songview flex-container">
                                <div className="flex-child">
                                    <img alt="album logo" src={song.songAlbumImg}/>
                                    <h2>{song.songName}</h2>
                                    <p>Artist of the song: {song.songArtist}</p>
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