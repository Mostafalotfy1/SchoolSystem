import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import { Redirect } from "react-router";
// pages
import { Home, Request, ProtectedRouter } from "../pages";
// components
import { Header, SideBar, ChartsSideBar, Footer } from "../components/layout";

// assets
import WavyImg from "../assets/footerBg.svg";
import { connect } from "react-redux";
import Signup from "./../pages/authentication/Signup";
import Signin from "./../pages/authentication/Signin";
import { ConfigProvider } from "antd";

export default function Routering({ children, isLoggedIn }) {
  return (
    <ConfigProvider direction="rtl">
      <BrowserRouter>
        <div className="wrapper radius">
          {/* footer wavy fixed img  */}
          <img
            src={WavyImg}
            alt="wavy footer img"
            className="img-fluid wrapper-footer-img"
          />

          {/* header   */}
          {isLoggedIn && <Header />}

          <div class="container-fluid">
            <div className="row flex-nowrap">
              {isLoggedIn && (
                <div className="col">
                  <SideBar />
                </div>
              )}

              <div className="col flex-fill d-flex flex-column">
                <Switch>
                  <Route path="/" exact>
                    <ProtectedRouter cmp={Home} />
                    {/* {props.isLoggedIn ? <Home /> : <Redirect to="/signin" />} */}
                  </Route>

                  <Route path="/request" exact>
                    <ProtectedRouter cmp={Request} />

                    {/* {props.isLoggedIn ? <Request /> : <Redirect to="/signin" />} */}
                  </Route>

                  <Route path="/signup" exact>
                    <ProtectedRouter cmp={Signup} />

                    {/* {props.isLoggedIn ? <Redirect to="/" /> : <Signup />} */}
                  </Route>

                  <Route path="/signin" exact>
                    <ProtectedRouter cmp={Signin} />

                    {/* {props.isLoggedIn ? <Redirect to="/" /> : <Signin />} */}
                  </Route>
                </Switch>
                {children}
                {isLoggedIn && <Footer />}
              </div>

              {isLoggedIn && (
                <div className="col">
                  <ChartsSideBar />
                </div>
              )}
            </div>
          </div>
        </div>
      </BrowserRouter>
    </ConfigProvider>
  );
}
