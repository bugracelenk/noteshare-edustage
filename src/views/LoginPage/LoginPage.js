import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "actions/authActions";

import "./css/main.css";
import "./css/util.css";
import "./fonts/font-awesome-4.7.0/css/font-awesome.min.css";

class LoginPage extends Component {
  state = {};
  handleChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    return (
      <div className="limiter">
        <div classNameName="container-login100">
          <div classNameName="wrap-login100">
            <div className="login100-more" />
            <div class="login100-form validate-form">
              <span className="login100-form-title p-b-43">
                Login to continue
              </span>

              <div className="wrap-input100 validate-input">
                <input
                  className="input100"
                  type="text"
                  name="email"
                  onChange={this.handleChange}
                />
                <span className="focus-input100" />
                <span className="label-input100">Email</span>
              </div>

              <div className="wrap-input100 validate-input">
                <input
                  className="input100"
                  type="password"
                  name="password"
                  onChange={this.handleChange}
                />
                <span className="focus-input100" />
                <span className="label-input100">Password</span>
              </div>

              <div className="flex-sb-m w-full p-t-3 p-b-32">
                <div className="contact100-form-checkbox">
                  <input
                    className="input-checkbox100"
                    id="ckb1"
                    type="checkbox"
                    name="remember-me"
                  />
                  <label className="label-checkbox100" for="ckb1">
                    Remember me
                  </label>
                </div>
              </div>

              <div>
                <a href="#" className="txt1">
                  Forgot Password?
                </a>
              </div>

              <div className="container-login100-form-btn">
                <button
                  className="login100-form-btn"
                  onClick={() => this.props.login({ email: this.state.email, password: this.state.password})}
                >
                  Login
                </button>
              </div>

              <div className="text-center p-t-46 p-b-20">
                <span className="txt2">or sign up using</span>
              </div>

              <div className="login100-form-social flex-c-m">
                <a
                  href="#"
                  className="login100-form-social-item flex-c-m bg1 m-r-5"
                >
                  <i className="fa fa-facebook-f" aria-hidden="true" />
                </a>

                <a
                  href="#"
                  className="login100-form-social-item flex-c-m bg2 m-r-5"
                >
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { login }
)(LoginPage);
