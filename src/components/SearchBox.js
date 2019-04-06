import React, { Component } from "react";
import { Transition } from "semantic-ui-react";

export default class SearchBox extends Component {
  constructor(props){
    super(props);
    this.state= {
      visible: false
    }
  }
  render() {
    return (
      <Transition visible={this.props.isVisible || this.state.visible} animation="slide down">
        <div className="search_input" id="search_input_box">
          <div className="container">
            <form
              className="d-flex justify-content-between"
              method=""
              action=""
            >
              <input
                type="text"
                className="form-control"
                id="search_input"
                placeholder="Search Here"
              />
              <button type="submit" className="btn" />
              <span
                className="ti-close"
                id="close_search"
                title="Close Search"
                onClick={() => this.setState({ visible: false})}
              />
            </form>
          </div>
        </div>
      </Transition>
    );
  }
}
