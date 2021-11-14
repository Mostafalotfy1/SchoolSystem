import React from "react";

import { Logo, Profile } from "../../global";

import NavBar from "./NavBar";

import Styles from "../../../styles/header/header.module.css";

export default function Header() {
  return (
    <header
      className={`main-header d-flex align-items-center ${Styles.mainHeader}`}
    >
      <div className="container-fluid">
        <div
          className={`content d-flex justify-content-between align-items-center`}
        >
          <Logo />
          <NavBar />
          <Profile />
        </div>
      </div>
    </header>
  );
}
