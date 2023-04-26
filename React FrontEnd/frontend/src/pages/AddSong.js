import React, { useState } from "react";
import NavMenu from "../components/NavMenu";
import  "../css/AddSong.css"
import AlertMessage from "../components/AlertMessage";

function SongUploadForm() {
    //Form states to send to the API
    const [songName, setSongName] = useState("");
    const [songArtist, setSongArtist] = useState("");
    const [songAlbumImg, setSongAlbumImg] = useState(null);
    const [songAlbumName, setSongAlbumName] = useState("");
    const [songGame, setSongGame] = useState("");

    //Modal States
    const [showModal, setModalShow] = useState(false);
    const [modalMessage, setModalMessage] = useState("")
    const [modalVariant, setModalVariant] = useState("info")
    const [modalHeader, setModalHeader] = useState("")
    const [modalText, setModalText] = useState("")

    const handleSongImgChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                setSongAlbumImg(reader.result);
            };
        }
    };

    function setModal(modalMessage, modalVariant, modalHeader, modalText) {
        setModalShow(true)
        setModalMessage(modalMessage);
        setModalVariant(modalVariant);
        setModalHeader(modalHeader);
        setModalText(modalText);
    }

    const handleModelClose = () => {
        setModalShow(false)
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("songName", songName);
        formData.append("songGame", songGame);
        formData.append("songArtist", songArtist);
        formData.append("songAlbumImg", songAlbumImg);
        formData.append("songAlbumName", songAlbumName);

        fetch("https://localhost:7261/Song", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                songName,
                songGame,
                songArtist,
                songAlbumImg,
                songAlbumName
            })
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
            })
            .then((data) => {
                console.log("Test " + data)
                setModal("Song is successfully added with name: " + songName + " and artist: " + songArtist, "success",
                    "Successful upload", "I detected a successful upload")
            })
            .catch((error) => {
                setModal("An error occured while uploading your song? Try again later","danger",
                "Something went wrong >:( ", "I got an error back from the mikudayos")
            });
    };

    return (
        <div>
            <NavMenu />
            <AlertMessage showModal={showModal} modalMessage={modalMessage}
                          modalVariant={modalVariant} handleClose={handleModelClose}
                          alertHeader={modalHeader}
                          alertText={modalText} />
            <form className={"form"} onSubmit={handleSubmit}>
                <h1> Wanna add song to the Project diva library?</h1>
                <div>
                    <label htmlFor="songName">Song Name:</label> <br />
                    <input type="text" id="songName" value={songName} onChange={(event) => setSongName(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="songGame">Song Game:</label> <br />
                    <input type="text" id="songGame" value={songGame} onChange={(event) => setSongGame(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="songArtist">Song Artist:</label> <br />
                    <input type="text" id="songArtist" value={songArtist} onChange={(event) => setSongArtist(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="songAlbumImg">Song Album Jacket:</label> <br />
                    <input type="file" id="songAlbumImg" accept="image/*"  onChange={handleSongImgChange} />
                </div>
                <div>
                    <label htmlFor="songAlbumName">Song Album Name:</label> <br />
                    <input type="text" id="songAlbumName" value={songAlbumName} onChange={(event) => setSongAlbumName(event.target.value)} />
                </div>
                <button type="submit">Upload Song</button>
            </form>
        </div>
    );
}

export default SongUploadForm;