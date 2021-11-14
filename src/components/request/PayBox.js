import React from "react";

import Styles from "../../styles/request/payBox.module.css";

import { Link } from "react-router-dom";
import FOOTER from "../layout/footer/Footer"
import { IconArrow } from "../svg";

export default function PayBox({ data }) {
  return (
    <div className={Styles.payBox}>
      <div
        className={`${Styles.payBoxIcon} d-flex align-items-center justify-content-center`}
      >
        {data.icon}
      </div>
      <div className={Styles.payBoxInfo}>
        <h5 className={Styles.payBoxTitle}>{data.title}</h5>
        <p className={Styles.payBoxText}>{data.text}</p>
      </div>
      <div className={Styles.payBoxFooter}>
        <Link to="/">
          <span className={Styles.icon}>
            <IconArrow />
          </span>

          <input
            className={Styles.check}
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <span className={Styles.payNow}>  
الدفع الان</span>
        </Link>
      </div>
    
    </div>
  );
}
