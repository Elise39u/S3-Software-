import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

class EditSongModal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            songId: this.props.songId,
            songName: this.props.songName,
            songGame: this.props.songGame,
            songArtist: this.props.songArtist,
            songAlbumImg: this.props.songAlbumImg,
            songAlbumName: this.props.songAlbumName
        }
    }

    render() {
        return (
        <Modal show={this.props.showEditModal} onClose={this.props.handleEditClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit {this.state.songName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="song id">
                        <Form.Label>Song Id</Form.Label>
                        <Form.Control type="text" placeholder="" value={this.state.songId} disabled={true}/>
                    </Form.Group>
                    <Form.Group controlId="song name">
                        <Form.Label>Song Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter song name" value={this.state.songName} />
                    </Form.Group>
                    <Form.Group controlId="song game">
                        <Form.Label>Album Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter the song games appearances" value={this.state.songGame}/>
                    </Form.Group>
                    <Form.Group controlId="song artist">
                        <Form.Label>Album Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter the songs artist(s)" value={this.state.songArtist}/>
                    </Form.Group>
                    <Form.Group controlId="song album-img">
                        <Form.Label>Album Name</Form.Label>
                        <Form.Control type="file" placeholder="Upload  the album image here" value={this.state.songAlbumImg}/>
                    </Form.Group>
                    <Form.Group controlId="song album-name">
                        <Form.Label>Album Name</Form.Label>
                        <Form.Control type="text" placeholder="enter the songs album" value={this.state.songAlbumName}/>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={this.props.handleEditClose}>Cancel</Button>
                <Button variant="primary">Save Changes</Button>
            </Modal.Footer>
        </Modal>
        )
    }
}

export default EditSongModal