import React, {useState} from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import '../../css/Song/EditSong.css'
import AlertMessage from "../AlertMessage";

function EditSongModal (props){
    //Song prop states
    const[showModal] = useState(props.showModal);
    const[songId] = useState(props.songId);
    const[songName, setSongName] = useState(props.songName);
    const[songGame, setSongGame] = useState(props.songGame);
    const[songArtist, setSongArtist] = useState(props.songArtist);
    const[songAlbumImg, setSongAlbumImg] = useState(props.songAlbumImg);
    const[songAlbumName, setSongAlbumName] = useState(props.songAlbumName);
    const[songProducer, setSongProducer] = useState(props.songProducer);

    //Modal States
    const [showAlert, setAlertShow] = useState(false);
    const [alertMessage, setAlertMessage] = useState("")
    const [alertVariant, setAlertVariant] = useState("info")
    const [alertHeader, setAlertHeader] = useState("")
    const [alertText, setAlertText] = useState("")

    const handleSongAlbumImgChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                setSongAlbumImg(reader.result);
            };
        }
    }

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
        formData.append("songProducer", songProducer)

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
                songAlbumName,
                songProducer
            })
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                response.json().then(r => {
                    setModal("Song is successfully updated", "success",
                    "Successful upload", "I detected a successful upload")
                    props.updateSongList(r);})
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
        <Modal show={showModal} onClose={props.handleEditClose} onHide={props.handleEditClose}>
            <Modal.Header className={"modal-header editModal"} closeButton>
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
                        <Form.Control type="file" placeholder="Upload  the album image here" onChange={handleSongAlbumImgChange} />
                        <i> Current image preview </i> <br />
                        <img className={"previewImg"} src={songAlbumImg} alt={"albumImg"}/>
                    </Form.Group>
                    <Form.Group controlId="song album-name">
                        <Form.Label>Album Name</Form.Label>
                        <Form.Control type="file" placeholder="Upload  the album logo  here" value={typeof songAlbumName !== 'string' ? songAlbumName : ""} onChange={handleSongNameChange}/>
                        <i> Current image preview </i> <br />
                        <img className={"previewImg"} src={songAlbumName} alt={"albumImg"}/>
                    </Form.Group>
                <Form.Group controlId="song producer">
                    <Form.Label>Song Producer</Form.Label>
                    <Form.Control type="text" placeholder="Enter the songs producer" value={songProducer} onChange={(e) => setSongProducer(e.target.value)}/>
                </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer className={"modal-footer editModal"}>
                <Button variant="dark" onClick={props.handleEditClose}>Cancel</Button>
                <Button variant="primary" onClick={handleSubmit}>Save Changes</Button>
            </Modal.Footer>
        </Modal>
        )
    }

export default EditSongModal