import React from "react";

import AddRequest from "./AddRequest";

import PayBox from "./PayBox";

import Styles from "../../styles/request/payInfo.module.css";

import { IconMoney, IconInstall, IconCalender } from "../svg";

import Pay from "../../assets/req.svg";

export default function PayInfo({ toggleAddStudentModal }) {
  const styles = { width: "30px", height: "auto" };

  return (
    <div className={`${Styles.payInfo}`}>
      <div className={`${Styles.payInfoHeader} row align-items-center`}>
        <div className="col-6">
          <h4 className={Styles.payInfoTitle}>طريقة الدفع</h4>
        </div>

        <div className="col-6 d-flex justify-content-end">
          <AddRequest toggleAddStudentModal={toggleAddStudentModal} />
        </div>
      </div>

      <div className="row">
        <div className="col-3">
          <PayBox
            data={{
              icon: <IconMoney styles={styles} />,
              title: "سداد كاش",
              text: "قم بتسديد مصاريف المدرسه دفعه واحدة",
            }}
          />
        </div>
        <div className="col-3">
          <PayBox
            data={{
              icon: <IconCalender styles={styles} />,
              title: "سداد كاش",
              text: "قم بتسديد مصاريف المدرسه دفعه واحدة",
            }}
          />
        </div>
        <div className="col-3">
          <PayBox
            data={{
              icon: <IconInstall styles={styles} />,
              title: "سداد كاش",
              text: "قم بتسديد مصاريف المدرسه دفعه واحدة",
            }}
          />
        </div>
        <div className={`col-3 d-flex ${Styles.payInfoImgWrapper}`}>
          <div className={Styles.payInfoImg}>
            <img src={Pay} alt="paying" className="img-fluid " />
          </div>
        </div>
      </div>
    </div>
  );
}
