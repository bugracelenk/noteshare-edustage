import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "actions/authActions";

import "./css/main.css";
import "./css/util.css";
class LoginPage extends Component {
  state = {};
  handleChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    return (
      <div class="limiter">
        <div class="container-login100">
          <div class="wrap-login100">
            <div class="login100-form validate-form">
              <span class="login100-form-title">Member Login</span>

              <div
                class="wrap-input100 validate-input"
                data-validate="Valid email is required: ex@abc.xyz"
              >
                <input
                  class="input100"
                  type="text"
                  name="email"
                  placeholder="Email"
                  onChange={this.handleChange}
                />
                <span class="focus-input100" />
                <span class="symbol-input100">
                  <i class="fa fa-envelope" aria-hidden="true" />
                </span>
              </div>

              <div
                class="wrap-input100 validate-input"
                data-validate="Password is required"
              >
                <input
                  class="input100"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={this.handleChange}
                />
                <span class="focus-input100" />
                <span class="symbol-input100">
                  <i class="fa fa-lock" aria-hidden="true" />
                </span>
              </div>

              <div class="container-login100-form-btn">
                <button
                  class="login100-form-btn"
                  onClick={() =>
                    this.props.login({
                      email: this.state.email,
                      password: this.state.password
                    })
                  }
                >
                  Login
                </button>
              </div>

              <div class="text-center p-t-12">
                <span class="txt1">Forgot</span>
                <a class="txt2" href="#">
                  Username / Password?
                </a>
              </div>

              <div class="text-center p-t-136">
                <a class="txt2" href="#">
                  Create your Account
                  <i class="fa fa-long-arrow-right m-l-5" aria-hidden="true" />
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
