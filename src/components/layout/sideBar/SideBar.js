import React, { useState } from "react";

import Profile from "./Profile";

import NavBar from "./NavBar";

import Styles from "../../../styles/sideBar/sideBar.module.css";

import Settings from "../../../assets/settings.svg";
import ToggleScreen from "../../../assets/toggleScreen.svg";

export default function SideBar() {
  const [toggle, setToggle] = useState(false);
  return (
    <aside
      className={`${Styles.sideBar} ${toggle ? Styles.toggle : ""} radius`}
    >
      <img
        src={ToggleScreen}
        alt=""
        className={`img-fluid ${Styles.toggleScreen}`}
        onClick={() => setToggle(!toggle)}
      />
      {/* start profile  */}
      <Profile toggle={toggle} />
      <NavBar />
      <div className="d-flex justify-content-center"
      style={{
        position:'absolute',
        bottom:"80px",
        left:'150px'
      }}
      >
        <button className={Styles.settings}>
          <img src={Settings} alt="settings" className="img-fluid" />
        </button>
      </div>
    </aside>
  );
}
