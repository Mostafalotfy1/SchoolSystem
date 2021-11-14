import React from "react";

import { HomeBox } from "../components/home";

import Styles from "../styles/home/landingBox.module.css";

import L1 from "../assets/learning1.svg";
import L2 from "../assets/learning2.svg";
import L3 from "../assets/learning3.svg";

export default function Home() {
  return (
    <section className="home-page page">
      <div className="row mt-4">
        {/* box  */}
        <div className={`col-md-4 col-lg-3 ${Styles.landingBoxOuter}`} style={{maxHeight:""}}>
          <HomeBox img={L1} title="مشاركة الطلب" />
        </div>
        {/* box  */}
        <div className={`col-md-4 col-lg-3 ${Styles.landingBoxOuter}`}>
          <HomeBox img={L2} title="مشاركة الطلب" />
        </div>
        {/* box  */}
        <div className={`col-md-4 col-lg-3 ${Styles.landingBoxOuter}`}>
          <HomeBox img={L3} title="مشاركة الطلب" />
        </div>
        <div className={`col-md-4 col-lg-3 ${Styles.landingBoxOuter}`}>
          <HomeBox img={L2} title="مشاركة الطلب" />
        </div>
      </div>
      <div className={`row ${Styles.outer}`}>
        {/* box  */}
        <div className={`col-md-4 col-lg-3 ${Styles.landingBoxOuter}`}>
          <HomeBox img={L1} title="مشاركة الطلب" />
        </div>
        {/* box  */}
        <div className={`col-md-4 col-lg-3 ${Styles.landingBoxOuter}`}>
          <HomeBox img={L2} title="مشاركة الطلب" />
        </div>
        {/* box  */}
        <div className={`col-md-4 col-lg-3 ${Styles.landingBoxOuter}`}>
          <HomeBox img={L3} title="مشاركة الطلب" />
        </div>
         <div className={`col-md-4 col-lg-3 ${Styles.landingBoxOuter}`}>
          <HomeBox img={L3} title="مشاركة الطلب" />
        </div>
      </div>
    </section>
  );
}
