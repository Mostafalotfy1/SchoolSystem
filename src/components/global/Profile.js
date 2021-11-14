import React from "react";

import ProfileImg from "../../assets/profile.png";

import Styles from "../../styles/global/profile.module.css";

export default function Profile() {
  return (
    <div className={Styles.profile}>
      <button className={`${Styles.profileBtn} d-flex align-items-center`}>
        <span className={Styles.profileText}>تسجيل خروج</span>
        <img src={ProfileImg} alt="profile avatar" className="img-fluid" />
      </button>
    </div>
  );
}
