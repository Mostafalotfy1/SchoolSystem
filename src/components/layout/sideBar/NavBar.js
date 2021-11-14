import React from "react";
import { NavLink } from "react-router-dom";

import Styles from "../../../styles/sideBar/navBar.module.css";

import {
  IconChild,
  IconDashboard,
  IconPeople,
  IconPersonAdd,
  IconWhatsapp,
} from "../../svg";

export default function NavBar() {
  const styles = {
    width: "20px",
    height: "auto",
    marginLeft: "20px",
    fill: "#BCBBBC",
  };
  const fill = "#BCBBBC";
  return (
    <nav className={`${Styles.navBar}`}>
      <NavLink exact to="/" activeClassName={Styles.active}>
        <span className="d-flex align-items-center">
          <IconDashboard styles={styles} fill={fill} />
          <span className={`${Styles.navBarLink}`}>الرئيسية</span>
        </span>
      </NavLink>
      <NavLink exact to="/e" activeClassName={Styles.active}>
        <span className="d-flex align-items-center">
          <IconPeople styles={styles} fill={fill} />
          <span className={`${Styles.navBarLink}`}>ولى امر</span>
        </span>
      </NavLink>
      <NavLink exact to="/c" activeClassName={Styles.active}>
        <span className="d-flex align-items-center">
          <IconChild styles={styles} fill={fill} />
          <span className={`${Styles.navBarLink}`}>طالب</span>
        </span>
      </NavLink>
      <NavLink exact to="/y" activeClassName={Styles.active}>
        <span className="d-flex align-items-center">
          <IconPersonAdd styles={styles} fill={fill} />
          <span className={`${Styles.navBarLink}`}>الدعم الفنى</span>
        </span>
      </NavLink>
      <a href="/whats" rel="norefererr" className={Styles.lastLink}>
        <IconWhatsapp
          styles={{ width: "40px", marginLeft: "15px", marginRight: "-13px" }}
        />
        <span className={`${Styles.navBarLink}`}>التواصل عبر الواتس</span>
      </a>
    </nav>
  );
}
