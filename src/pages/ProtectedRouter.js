import React, { Fragment, useEffect } from "react";

import { useHistory } from "react-router-dom";

import { connect } from "react-redux";

const ProtectedRouter = ({ cmp, isLoggedIn }) => {
  let Cmp = cmp;
  let history = useHistory();

  // check if the user loged or no
  useEffect(() => {
    if (!isLoggedIn) {
      // redirct to signin page
      history.push("/signin");
    } else {
      history.push("/");
    }
  }, [isLoggedIn, history]);

  return (
    <Fragment>
      <Cmp />
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.regularUser.isLoggedIn,
  };
};

export default connect(mapStateToProps)(ProtectedRouter);
