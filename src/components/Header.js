import React, { Component } from "react";
import classNames from "classnames";
import SearchBox from "./SearchBox";

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
    const el = document.querySelector("header");
    this.setState({ top: el.offsetTop, height: el.offsetHeight });
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  handleScroll() {
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
                <ul className="nav navbar-nav menu_nav ml-auto">
                  <li className="nav-item active">
                    <a className="nav-link" href="index.html">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="about-us.html">
                      About
                    </a>
                  </li>
                  <li className="nav-item submenu dropdown">
                    <a
                      href="#"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Pages
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a className="nav-link" href="courses.html">
                          Courses
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="course-details.html">
                          Course Details
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="elements.html">
                          Elements
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item submenu dropdown">
                    <a
                      href="#"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Blog
                    </a>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <a className="nav-link" href="blog.html">
                          Blog
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" href="single-blog.html">
                          Blog Details
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="contact.html">
                      Contact
                    </a>
                  </li>
                  <li className="nav-item">
                    <a onClick={() => this.setState({ visible: !this.state.visible})} className="nav-link search" id="search">
                      <i className="fas fa-search" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
