import React, { Component } from "react";
import classnames from "classnames";
import { Modal, Button } from "react-bootstrap";
export default class PopupMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: true
    };
  }
  render() {
    const { message } = this.props;
    return (
      <Modal
        show={this.state.isShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        {message.title ? <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            {message.title}
          </Modal.Title>
        </Modal.Header> : null}
        <Modal.Body>
          <h4>{message.messageTitle}</h4>
          <p>
            {message.text}
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => this.props.deleteFlashMessage(message.id)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
