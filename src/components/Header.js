import React, { Component } from "react";
import classNames from "classnames";
import SearchBox from "./SearchBox";
import { connect } from "react-redux";
import { logout } from "actions/authActions";
import { addFlashMessage } from "actions/flashMessageActions";
import { withRouter, Link } from "react-router-dom";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerClasses: {
        header_area: true,
        navbar_fixed: false,
        visible: false
      }
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    //gets current offsets and sets to the state
    const el = document.querySelector("header");
    this.setState({ top: el.offsetTop, height: el.offsetHeight });
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll() {
    //checks it should make navbar fixed or not
    this.setState({ scroll: window.scrollY });
    this.state.scroll > this.state.top
      ? this.setState({
          headerClasses: { header_area: true, navbar_fixed: true }
        })
      : this.setState({
          headerClasses: { header_area: true, navbar_fixed: false }
        });
  }

  render() {
    let headerClasses = classNames(this.state.headerClasses);
    const { visible } = this.state;
    const { isAuthenticated, logout, addFlashMessage } = this.props;

    const userLinks = () => {
      return (
        <ul className="nav navbar-nav menu_nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" href="index.html">
              Home
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" href="index.html">
              Notes
            </Link>
          </li>
          
          <li className="nav-item active">
            <Link className="nav-link" onClick={() => logout()}>
              Log Out
            </Link>
          </li>
        </ul>
      );
    };

    const guestLinks = () => {
      return (
        <ul className="nav navbar-nav menu_nav ml-auto">
          <li className="nav-item active">
            <Link className="nav-link" href="index.html">
              Home
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" href="index.html">
              About
            </Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/login">
              Log In
            </Link>
          </li>
        </ul>
      );
    };

    return (
      <header ref="Header" className={headerClasses}>
        <div className="main_menu">
          <SearchBox isVisible={visible} />
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <a className="navbar-brand logo_h" href="index.html">
                <img src="img/logo.png" alt="" />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar" /> <span className="icon-bar" />
                <span className="icon-bar" />
              </button>

              <div
                className="collapse navbar-collapse offset"
                id="navbarSupportedContent"
              >
                {isAuthenticated ? userLinks() : guestLinks()}
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

function mapStateToFunction(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
}

export default connect(
  mapStateToFunction,
  { logout, addFlashMessage }
)(withRouter(Header));
