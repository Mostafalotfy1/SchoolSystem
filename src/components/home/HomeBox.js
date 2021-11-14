import React from "react";

import Styles from "../../styles/home/landingBox.module.css";

export default function HomeBox({ img, title }) {
  return (
    <div
      className={`${Styles.landingBox} d-flex text-center justify-content-center`}
    >
      <div>
        <div className={Styles.img}>
          <img src={img} alt="title" className="img-fluid" />
        </div>
        <h4 className={Styles.title}>{title}</h4>
      </div>    </div>
  );
}
