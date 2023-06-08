import React, { useState } from "react";
import NavMenu from "../components/NavMenu";
import  "../css/Song/AddSong.css"
import AlertMessage from "../components/AlertMessage";
import { Form, Button } from 'react-bootstrap';

function SongUploadForm() {
    //Form states to send to the API
    const [songName, setSongName] = useState("");
    const [songArtist, setSongArtist] = useState("");
    const [songAlbumImg, setSongAlbumImg] = useState(null);
    const [songAlbumName, setSongAlbumName] = useState(null);
    const[songProducer, setSongProducer] = useState("");
    const [songGame, setSongGame] = useState("");
    const [songDifficulties] = useState([])

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

    const handleSongNameChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                setSongAlbumName(reader.result);
            };
        }
    }

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
        formData.append("songProducer", songProducer);

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
                songAlbumName,
                songProducer,
                songDifficulties
            })
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
            })
            .then((data) => {

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
            <Form className="form" onSubmit={handleSubmit}>
                <h1>Wanna add a song to the Project diva library?</h1>

                <Form.Group>
                    <Form.Label htmlFor="songName">Song Name:</Form.Label>
                    <Form.Control
                        type="text"
                        id="songName"
                        value={songName}
                        onChange={(event) => setSongName(event.target.value)}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor="songGame">Song Game:</Form.Label>
                    <Form.Control
                        type="text"
                        id="songGame"
                        value={songGame}
                        onChange={(event) => setSongGame(event.target.value)}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor="songArtist">Song Artist:</Form.Label>
                    <Form.Control
                        type="text"
                        id="songArtist"
                        value={songArtist}
                        onChange={(event) => setSongArtist(event.target.value)}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor="songAlbumImg">Song Album Jacket:</Form.Label>
                    <Form.Control
                        type="file"
                        id="songAlbumImg"
                        accept="image/*"
                        placeholder="Upload the album image here"
                        onChange={handleSongImgChange}
                    />
                    <i>Current Album image preview</i><br/>
                    <img className="previewImg" src={songAlbumImg} alt="albumImg" />
                </Form.Group>

                <Form.Group>
                    <Form.Label htmlFor="songAlbumName">Song Album Name:</Form.Label>
                    <Form.Control
                        type="file"
                        id="songAlbumName"
                        placeholder="Upload the album logo here"
                        accept="image/*"
                        onChange={handleSongNameChange}
                    />
                    <i>Current Album logo preview</i><br/>
                    <img className="previewImg" src={songAlbumName} alt="albumImg" />
                </Form.Group>

                <Form.Group controlId="song producer">
                    <Form.Label>Song Producer</Form.Label>
                    <Form.Control type="text" placeholder="Enter the songs producer" value={songProducer} onChange={(e) => setSongProducer(e.target.value)}/>
                </Form.Group>

                <Button type="submit">Upload Song</Button>
            </Form>
        </div>
    );
}

export default SongUploadForm;