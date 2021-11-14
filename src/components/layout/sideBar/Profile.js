import React from "react";

import ProfileImg from "../../../assets/profile.png";

import Styles from "../../../styles/sideBar/profile.module.css";

export default function Profile({ toggle }) {
  return (
    <div
      className={`${Styles.profile} ${toggle ? Styles.toggle : ""} text-left`}
    >
      <div className="text-center d-inline-block">
        <img src={ProfileImg} alt="profile avatar" className="img-fluid" />
        <h6 className={Styles.profileName}>سعد ابراهيم</h6>
      </div>
    </div>
  );
}
