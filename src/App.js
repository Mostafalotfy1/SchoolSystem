import React from "react";

import Routering from "./router";

import { connect } from "react-redux";

function App({ isLoggedIn }) {
  return <Routering isLoggedIn={isLoggedIn}></Routering>;
}

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.regularUser.isLoggedIn,
  };
};

export default connect(mapStateToProps)(App);
