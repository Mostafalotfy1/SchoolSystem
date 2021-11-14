import React from "react";

import { NavLink } from "react-router-dom";

import Styles from "../../../styles/header/navBar.module.css";

export default function NavBar() {
  return (
    <nav className={`navbar ${Styles.navbar}`}>
      <NavLink
        exact
        to="/request"
        activeClassName={Styles.active}
        className={Styles.navLink}
      >
        تقديم طلب
      </NavLink>
      <NavLink
        exact
        to="/follow"
        activeClassName={Styles.active}
        className={Styles.navLink}
      >
        متابعه
      </NavLink>
      <NavLink
        exact
        to="/t"
        activeClassName={Styles.active}
        className={Styles.navLink}
      >
        نداء طالبه
      </NavLink>
      <NavLink
        exact
        to="/invoices"
        activeClassName={Styles.active}
        className={Styles.navLink}
      >
        فواتير
      </NavLink>
      <NavLink
        exact
        to="/share"
        activeClassName={Styles.active}
        className={Styles.navLink}
      >
        مشاركة
      </NavLink>
      <NavLink
        exact
        to="/review"
        activeClassName={Styles.active}
        className={Styles.navLink}
      >
        مراجعة طلب
      </NavLink>
      <NavLink
        exact
        to="/invoice"
        activeClassName={Styles.active}
        className={Styles.navLink}
      >
        سداد فاتورة
      </NavLink>
      <NavLink
        exact
        to="/activities"
        activeClassName={Styles.active}
        className={Styles.navLink}
      >
        انشطة
      </NavLink>
      <NavLink
        exact
        to="/follow"
        activeClassName={Styles.active}
        className={Styles.navLink}
      >
        طلب تقرير
      </NavLink>
       <NavLink
        exact
        to="/follow"
        activeClassName={Styles.active}
        className={Styles.navLink}
      >
        طلب كشف
      </NavLink>
    </nav>
  );
}
