import React, { Component } from "react";
import "./auth.scss";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import {
  formItemLayout,
  tailFormItemLayout,
  email_rules,
  password_rules,
  confirm_password_rules,
} from "../layout";
import {
  signupGoogle,
  signupFacebook,
  signinEmailPassword,
} from "./../../redux/actions/authAction";
import { connect } from "react-redux";
import { Form, Input, Button } from "antd";
import BackgroundImge from "./bkground.png";
import bgShape from "./bg-shape.png";
import arrowIcon from "./arrow.svg";
import logo from "./logo.svg";
import fbIcon from "./fb-icon.svg";
import twtrIcon from "./twitter-icon.svg";
import GPIcon from "./google-plus.svg";

class Signin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }

  onFinish = (e) => {
    e.preventDefault();

    if (!e.target.email.value.length || !e.target.password.value.length) return;
    try {
      this.props.dispatchRegularSignin(
        e.target.email.value,
        e.target.password.value
      );
    } catch (e) {
        
    }
  };
  render() {
    return (
      <div
        className="wrapper signIn"
        style={{
          backgroundImage: `url(${BackgroundImge})`,
          backgroundSize: "cover",
          margin:"5px -40px ",
        
          minHeight:"990px",
          maxHeight:"100%"
        }}
      >
        <div className="container h-100">
          <div className="row h-100 align-items-center cardRow" style={{margin:"auto"}}>
            <div className="col">
              <div className="floating">
                <div style={{ display: "flex", height: "100%" }} className="skewStyle">
                 
                  <div
                    className="col-6 right"
                    style={{
                      backgroundImage: `url(${bgShape})`,
                      backgroundSize: "cover",
                     
                    }}
                  >
                    <div
                      style={{ display: "flex", height: "100%" }}
                      class="align-items-center"
                    >
                      <div className="col text-wrapper">
                        <h1>???????? ?????????? ??????????</h1>
                        <h1>?????? ???????? ????????????</h1>
                        <br />
                        <p>?????? ?????????????? ????????????</p>
                        <p> ?????? ????????</p>

                        <div className="signup-request mt-2">
                          <p>?????? ???????? ??????????</p>
                          <a href="/signup">?????????? ????????</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 left">
                    <div className="row mt-5">
                      <div className="col-12">
                        <div class="w-100">
                          <img class="arrow" src={arrowIcon} width="52.81px" />
                        </div>
                      </div>

                      <div className="col">
                        <div class="logo-container text-center mb-5">
                        
                          <img src={logo} width="120px" />
                          <span className="textOfLogo">????????????</span>
                        
                      
                        </div>
                        <p class="form-title">?????????? ????????????</p>
                        <form onSubmit={this.onFinish}>
                          <div className="row inner">
                            <input
                              type="email"
                              name="email"
                              placeholder="??????????????"
                            />
                            <input
                              className="mt-2"
                              name="password"
                              type="password"
                              placeholder="???????? ????????????"
                            />

                            <button className="mt-1" type="submit">
                              ?????????? ????????
                            </button>
                            <div className="col social-media text-center mt-1">
                              <small>???? ???? ?????????????? ?????????????? ???? ????????</small>
                              <br />
                              <div
                                style={{ display: "inline" }}
                                className="icons-list"
                              >
                                <img
                                  src={GPIcon}
                                  onClick={this.props.dispatchGoogleSignup}
                                />
                                <img src={twtrIcon} />
                                <img
                                  src={fbIcon}
                                  onClick={this.props.dispatchFacebookSignup}
                                />
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  dispatchRegularSignin: (email, password) =>
    dispatch(signinEmailPassword(email, password)),
  dispatchGoogleSignup: () => dispatch(signupGoogle()),
  dispatchFacebookSignup: () => dispatch(signupFacebook()),
});
const mapStateToProps = (state) => {
  return {
    user: state.regularUser.user,
    loading: state.regularUser.loading,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Signin);
