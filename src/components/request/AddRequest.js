import React from "react";

import { IconPlus } from "../svg";

import Styles from "../../styles/request/addRequest.module.css";

export default function AddRequest({ toggleAddStudentModal }) {
  return (
    <button
      onClick={toggleAddStudentModal}
      className={`${Styles.addRequest} d-flex align-items-center`}
    >
      <span className={Styles.addRequestText}>اضافة طلب</span>
      <span
        className={`d-inline-flex align-items-center justify-content-center ${Styles.addRequestIcon}`}
      >
        <IconPlus styles={{ width: "14px", height: "auto", fill: "#fff" }} />
      </span>
    </button>
  );
}
