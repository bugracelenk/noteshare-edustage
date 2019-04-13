import React, { Component } from "react";
import PopupMessage from "./PopupMessage";
import { connect } from "react-redux";
import { deleteFlashMessage } from "actions/flashMessageActions";

class FlashMessages extends Component {
  render() {
    const messages = this.props.messages.map(message => (
      <PopupMessage key={message.id} message={message} deleteFlashMessage={this.props.deleteFlashMessage} />
    ));
    return <div>{messages}</div>;
  }
}

function mapStateToProps(state) {
  return {
    messages: state.flashMessage
  };
}

export default connect(
  mapStateToProps,
  { deleteFlashMessage }
)(FlashMessages);
