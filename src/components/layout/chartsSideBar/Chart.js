import React from "react";

import Styles from "../../../styles/chartsAsideBar/chartItem.module.css";

export default function Chart({ img, precentage, title, noIcon, toggle }) {
  return (
    <div className={`${Styles.chartItem} ${toggle ? Styles.toggle : ""}`}>
      <div
        className={`d-flex align-items-center justify-content-center  ${
          !noIcon ? Styles.img : ""
        }`}
      >
        <img src={img} className="img-fluid" alt="chart img" />
      </div>
      <div className={Styles.info}>
        {precentage && <span className={Styles.precentage}>{precentage}</span>}
        {title && <span className={Styles.title}>{title}</span>}
      </div>
    </div>
  );
}
