import React, {useState} from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import '../../css/Song/EditSong.css'
import AlertMessage from "../AlertMessage";

function EditSongModal (props){

    const[showModal, setShowModal] = useState(props.showModal);
    const[songId, setSongId] = useState(props.songId);
    const[songName, setSongName] = useState(props.songName);
    const[songGame, setSongGame] = useState(props.songGame);
    const[songArtist, setSongArtist] = useState(props.songArtist);
    const[songAlbumImg, setSongAlbumImg] = useState(props.songAlbumImg);
    const[songAlbumName, setSongAlbumName] = useState(props.songAlbumName);

    //Modal States
    const [showAlert, setAlertShow] = useState(false);
    const [alertMessage, setAlertMessage] = useState("")
    const [alertVariant, setAlertVariant] = useState("info")
    const [alertHeader, setAlertHeader] = useState("")
    const [alertText, setAlertText] = useState("")

    const handleSongImgChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                setSongAlbumImg(reader.result);
            };
        }
    }

    const handleCancelClick = () => {
        setShowModal(false);
    }

    function setModal(modalMessage, modalVariant, modalHeader, modalText) {
        setAlertShow(true)
        setAlertMessage(modalMessage);
        setAlertVariant(modalVariant);
        setAlertHeader(modalHeader);
        setAlertText(modalText);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("songId", songId);
        formData.append("songName", songName);
        formData.append("songGame", songGame);
        formData.append("songArtist", songArtist);
        formData.append("songAlbumImg", songAlbumImg);
        formData.append("songAlbumName", songAlbumName);

        fetch("https://localhost:7261/Song", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                songId,
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
                setModal("Song is successfully updated", "success",
                    "Successful upload", "I detected a successful upload")
            })
            .catch((error) => {
                setModal("An error occured while updating your song? Try again later","danger",
                    "Something went wrong >:( ", "I got an error back from the mikudayos")
            });
    };

    const handleAlertClose = () => {
        setAlertShow(false)
    }

        return (
        <Modal show={showModal} onHide={handleCancelClick}>
            <Modal.Header closeButton>
                <Modal.Title>Edit {songName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AlertMessage showModal={showAlert} modalMessage={alertMessage}
                              modalVariant={alertVariant} handleClose={handleAlertClose}
                              alertHeader={alertHeader}
                              alertText={alertText} />
                <Form>
                    <Form.Group controlId="song id">
                        <Form.Label>Song Id</Form.Label>
                        <Form.Control type="text" placeholder="" value={songId} disabled={true}/>
                    </Form.Group>
                    <Form.Group controlId="song name">
                        <Form.Label>Song Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter song name" value={songName} onChange={(e) => setSongName(e.target.value)} />
                    </Form.Group>
                    <Form.Group controlId="song game">
                        <Form.Label>Album Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter the song games appearances" value={songGame} onChange={(e) => setSongGame(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="song artist">
                        <Form.Label>Album Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter the songs artist(s)" value={songArtist} onChange={(e) => setSongArtist(e.target.value)}/>
                    </Form.Group>
                    <Form.Group controlId="song album-img">
                        <Form.Label>Album Name</Form.Label>
                        <Form.Control type="file" placeholder="Upload  the album image here" onChange={handleSongImgChange} />
                        <i> Current image preview </i> <br />
                        <img className={"previewImg"} src={songAlbumImg} alt={"albumImg"}/>
                    </Form.Group>
                    <Form.Group controlId="song album-name">
                        <Form.Label>Album Name</Form.Label>
                        <Form.Control type="text" placeholder="enter the songs album" value={songAlbumName} onChange={(e) => setSongAlbumName(e.target.value)}/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="dark" onClick={props.handleEditClose}>Cancel</Button>
                <Button variant="primary" onClick={handleSubmit}>Save Changes</Button>
            </Modal.Footer>
        </Modal>
        )
    }

export default EditSongModal