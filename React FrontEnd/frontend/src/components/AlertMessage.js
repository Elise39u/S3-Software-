import React from "react";
import {Alert} from "react-bootstrap";
import Button from "react-bootstrap/Button";

class AlertMessage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: this.props.showModal,
            modalMessage: this.props.modalMessage,
            variant: this.props.modalVariant,
            header: this.props.alertHeader,
            alertText: this.props.alertText
        }
    }

    render() {
        return(
            <Alert show={this.props.showModal} onClose={this.props.handleClose} variant={this.props.modalVariant}>
                <Alert.Heading>{this.props.alertHeader}</Alert.Heading>
                <p>
                    {this.props.alertText}
                </p>
                <hr />
                <div className="d-flex justify-content-end">
                    <b>{this.props.modalMessage}</b>
                    <Button onClick={this.props.handleClose} variant="dark">
                        Close the alert
                    </Button>
                </div>
            </Alert>
        )
    }
}

export default AlertMessage;