import React from "react"
import "../../css/Song/GetAllSongs.css"
import Pencil from "../../img/svgIcons/pencil-svgrepo-com.svg"
import TrashCan from "../../img/svgIcons/gui-trash-svgrepo-com.svg"
import EditSongModal from "./EditSongModal"
import Info from "../../img/svgIcons/information-circle-svgrepo-com.svg"

class GetAllSongs extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            LoadingData: false,
            songs: [],
            showEditModal: false,
            selectedSong: 0
        };
        //this.handleEditModalOpen = this.handleEditModalOpen.bind(this);
    }

    handleEditModalClose = () => {
        this.setState({showEditModal: false})
        this.setState({selectedSong: 0})
    }

    handleEditModalOpen(songId) {
        this.setState({showEditModal: true})
        this.setState({selectedSong: songId})
    }

    componentDidMount() {
        fetch("https://localhost:7261/Song")
            .then((res) => res.json())
            .then((json) => {
                const songData = json.sort((song) => song.name)
                this.setState({
                    songs: songData,
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
                    this.state.songs.map((song) => {
                        //Add <a link that adds as get request song for to the div> with help of song.songId
                        //Add also later vocaloid images instead of their names.
                            return(
                            <div className="mainView" key={song.songId}>
                                <div className="songJacket">
                                    <div className="jacket">
                                        <img className="jacketImg" alt="album jacket" src={song.songAlbumImg}/>
                                        <img className={"svgImages pencil"} src={Pencil}  alt={"edit the song"} onClick={this.handleEditModalOpen.bind(this, song.songId)}/>
                                        <img className={"svgImages trashcan"} src={TrashCan}  alt={"delete the song"}/>
                                        <img className={"svgImages info"} src={Info}  alt={"info about the song"}/>
                                    </div>
                                </div>
                                <div className="musicName">
                                    <span><b>Song name: {song.songName}</b></span>
                                </div>
                                <div className="musicProducer">
                                    <span><b>Song producer: Unknown</b></span>
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

                                {this.state.showEditModal && this.state.selectedSong === song.songId && (
                                    <EditSongModal
                                        showModal={this.state.showEditModal}
                                        handleEditClose={this.handleEditModalClose}
                                        songId={song.songId}
                                        songName={song.songName}
                                        songGame={song.songGame}
                                        songArtist={song.songArtist}
                                        songAlbumImg={song.songAlbumImg}
                                        songAlbumName={song.songAlbumName}
                                    />
                                )}
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