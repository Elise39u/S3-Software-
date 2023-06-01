import React, {useEffect, useState} from 'react';
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
    const[songDifficulties, setSongDifficulties] = useState(props.songDifficulties)

    //Separate Song difficulties states
    const [easyDifficulty, setEasyDifficulty] = useState({id:  0, Rating: 0.0})
    const [normalDifficulty, setNormalDifficulty] = useState({id:  0, Rating: 0.0})
    const [hardDifficulty, setHardDifficulty] = useState({id:  0, Rating: 0.0})
    const [extremeDifficulty, setExtremeDifficulty] = useState({id:  0, Rating: 0.0})
    const [extraExtremeDifficulty, setExtraExtremeDifficulty] = useState({id:  0, Rating: 0.0})

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

    const changeSongDifficultiesRatings = () => {
        const updatedSongList = []
        for (let i = 1; i < 5 + 1 + 1; i++) {
            switch (i) {
                case 1:
                    updatedSongList.push({songId: songId, difficultyId: i, difficultyRating: easyDifficulty.Rating});
                    break;
                case 2:
                    updatedSongList.push({songId: songId, difficultyId: i, difficultyRating: normalDifficulty.Rating});
                    break;
                case 3:
                    updatedSongList.push({songId: songId, difficultyId: i, difficultyRating: hardDifficulty.Rating});
                    break;
                case 4:
                    updatedSongList.push({songId: songId, difficultyId: i, difficultyRating: extremeDifficulty.Rating});
                    break;
                case 5:
                    updatedSongList.push({songId: songId, difficultyId: i, difficultyRating: extraExtremeDifficulty.Rating});
                    break;
                default:
                    break;
            }
        }
        setSongDifficulties(updatedSongList)
    }

    useEffect(() => {
        if(songDifficulties.length > 0) {
            songDifficulties.forEach((difficulty) => {
                switch (difficulty.difficultyId) {
                    case 1:
                        setEasyDifficulty({id: difficulty.difficultyId, Rating: difficulty.difficultyRating});
                        break;
                    case 2:
                        setNormalDifficulty({id: difficulty.difficultyId, Rating: difficulty.difficultyRating});
                        break;
                    case 3:
                        setHardDifficulty({id: difficulty.difficultyId, Rating: difficulty.difficultyRating});
                        break;
                    case 4:
                        setExtremeDifficulty({id: difficulty.difficultyId, Rating: difficulty.difficultyRating});
                        break;
                    case 5:
                        setExtraExtremeDifficulty({id: difficulty.difficultyId, Rating: difficulty.difficultyRating});
                        break;
                    default:
                        break;
            }})
        }
    }, [songDifficulties])

    function setModal(modalMessage, modalVariant, modalHeader, modalText) {
        setAlertShow(true)
        setAlertMessage(modalMessage);
        setAlertVariant(modalVariant);
        setAlertHeader(modalHeader);
        setAlertText(modalText);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        changeSongDifficultiesRatings();
        const formData = new FormData();
        formData.append("songId", songId);
        formData.append("songName", songName);
        formData.append("songGame", songGame);
        formData.append("songArtist", songArtist);
        formData.append("songAlbumImg", songAlbumImg);
        formData.append("songAlbumName", songAlbumName);
        formData.append("songProducer", songProducer);
        formData.append("songDifficulties", songDifficulties)

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
                songProducer,
                songDifficulties
            })
        })
            .then(async (response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                await response.json().then(r => {
                    setModal("Song is successfully updated", "success",
                        "Successful upload", "I detected a successful upload")
                    props.updateSongList(r);
                })
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
                        <i> Current Album image preview </i> <br />
                        <img className={"previewImg"} src={songAlbumImg} alt={"albumImg"}/>
                    </Form.Group>
                    <Form.Group controlId="song album-name">
                        <Form.Label>Album Name</Form.Label>
                        <Form.Control type="file" placeholder="Upload  the album logo  here" value={typeof songAlbumName !== 'string' ? songAlbumName : ""} onChange={handleSongNameChange}/>
                        <i> Current Album logo preview </i> <br />
                        <img className={"previewImg"} src={songAlbumName} alt={"albumImg"}/>
                    </Form.Group>
                <Form.Group controlId="song producer">
                    <Form.Label>Song Producer</Form.Label>
                    <Form.Control type="text" placeholder="Enter the songs producer" value={songProducer} onChange={(e) => setSongProducer(e.target.value)}/>
                </Form.Group>
                    <br/>
                    <Form.Group className={"difficulties editDiff"}>
                        <Form.Label >
                            <span className={"easy"}>Easy</span>
                            <Form.Control
                                type="number"
                                placeholder="Fill in the star rating of the song here. Leave it empty for -"
                                value={easyDifficulty.Rating === 0 ? 0 : easyDifficulty.Rating}
                                onChange={(e) =>{
                                    const rating = parseFloat(e.target.value);

                                    if (!isNaN(rating) && rating >= 0 && rating <= 15) {
                                        setEasyDifficulty({ id: easyDifficulty.id, Rating: rating });
                                    } else {
                                        setEasyDifficulty({ id: easyDifficulty.id, Rating: 0 });
                                    }}}
                            />
                        </Form.Label>
                    </Form.Group>
                    <Form.Group className={"difficulties editDiff"}>
                        <Form.Label >
                            <span className={"normal"}> Normal </span>
                            <Form.Control type="number"
                                          placeholder="Fill in the star rating of the song here. Leave it empty for -"
                                          value={normalDifficulty.Rating === 0 ? 0 : normalDifficulty.Rating}
                                          onChange={(e) =>{
                                              const rating = parseFloat(e.target.value);

                                              if (!isNaN(rating) && rating >= 0 && rating <= 15) {
                                                  setNormalDifficulty({ id: normalDifficulty.id, Rating: rating });
                                              } else {
                                                  setNormalDifficulty({ id: normalDifficulty.id, Rating: 0 });
                                              }}}>
                            </Form.Control>
                        </Form.Label>
                    </Form.Group>
                    <Form.Group className={"difficulties editDiff"}>
                        <Form.Label >
                            <span className={"hard"}>Hard</span>
                            <Form.Control type="number"
                                placeholder="Fill in the star rating of the song here. Leave it empty for -"
                                value={hardDifficulty.Rating === 0 ? 0 : hardDifficulty.Rating}
                                onChange={(e) =>{
                                    const rating = parseFloat(e.target.value);

                                    if (!isNaN(rating) && rating >= 0 && rating <= 15) {
                                        setHardDifficulty({ id: hardDifficulty.id, Rating: rating });
                                    } else {
                                        setHardDifficulty({ id: hardDifficulty.id, Rating: 0 });
                                    }}}>
                            </Form.Control>
                        </Form.Label>
                    </Form.Group>
                    <Form.Group className={"difficulties editDiff"}>
                        <Form.Label >
                            <span className={"extreme"}>Extreme</span>
                            <Form.Control type="number"
                                          placeholder="Fill in the star rating of the song here. Leave it empty for -"
                                          value={extremeDifficulty.Rating === 0 ? 0 : extremeDifficulty.Rating}
                                          onChange={(e) =>{
                                              const rating = parseFloat(e.target.value);

                                              if (!isNaN(rating) && rating >= 0 && rating <= 15) {
                                                  setExtremeDifficulty({ id: extremeDifficulty.id, Rating: rating });
                                              } else {
                                                  setExtremeDifficulty({ id: extremeDifficulty.id, Rating: 0 });
                                              }}}>
                            </Form.Control>
                        </Form.Label>
                    </Form.Group>
                    <Form.Group className={"difficulties editDiff"}>
                        <Form.Label >
                            <span className={"extraExtreme"}> Extra Extreme</span>
                            <Form.Control type="number"
                                placeholder="Fill in the star rating of the song here. Leave it empty for -"
                                value={extraExtremeDifficulty.Rating === 0 ? 0 : extraExtremeDifficulty.Rating}
                                onChange={(e) => {
                                    const rating = parseFloat(e.target.value);

                                    if (!isNaN(rating) && rating >= 0 && rating <= 15) {
                                        setExtraExtremeDifficulty({ id: extraExtremeDifficulty.id, Rating: rating });
                                    } else {
                                        setExtraExtremeDifficulty({ id: extraExtremeDifficulty.id, Rating: 0 });
                                    }}}>
                            </Form.Control>
                        </Form.Label>
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