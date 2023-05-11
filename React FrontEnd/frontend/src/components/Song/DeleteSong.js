import React, {useState} from 'react';
import AlertMessage from "../AlertMessage";
import {Button, Modal} from "react-bootstrap";
import '../../css/Song/DeleteSong.css'

function DeleteSong(props) {
    //Song properties
    const[showModal] = useState(props.showModal);
    const[songId] = useState(props.songId);
    const[songName] = useState(props.songName);

    //AlertModal props states
    const [showAlert, setAlertShow] = useState(false);
    const [alertMessage, setAlertMessage] = useState("")
    const [alertVariant, setAlertVariant] = useState("info")
    const [alertHeader, setAlertHeader] = useState("")
    const [alertText, setAlertText] = useState("")

    function setModal(modalMessage, modalVariant, modalHeader, modalText) {
        setAlertShow(true)
        setAlertMessage(modalMessage);
        setAlertVariant(modalVariant);
        setAlertHeader(modalHeader);
        setAlertText(modalText);
    }

    const handleAlertClose = () => {
        setAlertShow(false)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            await fetch("https://localhost:7261/Song/" + songId, {
                method: "DELETE"
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Network response was not ok");
                    }
                    response.json().then(r => {
                        setModal("Song is successfully deleted", "success",
                            "Successful deletion", "I detected a successful deletion")
                        props.updateSongList(r);
                    })
                })
        } catch(error) {
                setModal("An error occured while deleting your song? Try again later","danger",
                    "Something went wrong >:( ", "I got an error back from the mikudayos")
            }
    }

    return (
        <Modal show={showModal} onClose={props.handleDeleteClose} onHide={props.handleDeleteClose}>
            <Modal.Header className={"modal-header deleteModal"} closeButton>
                <Modal.Title>Do you want to delete {songName}?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <AlertMessage showModal={showAlert} modalMessage={alertMessage}
                              modalVariant={alertVariant} handleClose={handleAlertClose}
                              alertHeader={alertHeader}
                              alertText={alertText} />
            <p> Be warned deleting <b> {songName} </b> is irreversible. <br />
                Are you sure you want to delete <b> {songName} </b>!</p>
            </Modal.Body>
            <Modal.Footer className={"modal-footer deleteModal"}>
                <Button variant="dark" onClick={props.handleDeleteClose}>Cancel Deletion</Button>
                <Button variant="primary" onClick={handleSubmit}>Delete {songName}</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default DeleteSong