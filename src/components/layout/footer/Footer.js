import React from "react";
import { Link } from "react-router-dom";

import Styles from "../../../styles/footer/footer.module.css";

import FacIcon from "../../../assets/face.svg";
import TwiIcon from "../../../assets/twitter.svg";
import GooIcon from "../../../assets/google.svg";

export default function Footer() {
  return (
    <footer className={Styles.footer}>
      <div className="row flex-nowrap">
        {/* logo  */}
        <div className="col">
          <div className={Styles.head}>
            <Link to="/">ابنائى</Link>
          </div>
        </div>
        {/* //clients  */}
        <div className="col">
          <div className={Styles.head}>
            <h6 className={Styles.headText}>العملاء</h6>
          </div>
          <ul className={`list-unstyled m-0 p-0 ${Styles.body}`}>
            <li>
              <Link to="/">مجتمع</Link>
            </li>
            <li>
              <Link to="/">ادوات المساعدة</Link>
            </li>
            <li>
              <Link to="/">ادوات المساعدة</Link>
            </li>
          </ul>
        </div>

        {/* // company  */}
        <div className="col">
          <div className={Styles.head}>
            <h6 className={Styles.headText}>الشركة</h6>
          </div>
          <ul className={`list-unstyled m-0 p-0 ${Styles.body}`}>
            <li>
              <Link to="/">مجتمع</Link>
            </li>
            <li>
              <Link to="/">ادوات المساعدة</Link>
            </li>
            <li>
              <Link to="/">ادوات المساعدة</Link>
            </li>
          </ul>
        </div>
        {/* // ؤخىفشؤف  */}
        <div className="col">
          <div className={Styles.head}>
            <h6 className={Styles.headText}>تواصل معنا</h6>
          </div>
          <ul
            className={`list-unstyled m-0 p-0 d-flex align-items-center ${Styles.body}`}
          >
            <li>
              <img src={TwiIcon} alt="facebook" className="img-fluid" />
            </li>
            <li>
              <img src={GooIcon} alt="facebook" className="img-fluid" />
            </li>
            <li>
              <img src={FacIcon} alt="facebook" className="img-fluid" />
            </li>
          </ul>
        </div>
        <div className="col">
          <Link to="/" className={Styles.shareNow}>
            اشترك الان
          </Link>
        </div>
      </div>
    </footer>
  );
}
