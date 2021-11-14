import React from "react";

import { Link } from "react-router-dom";

import LogoImg from "../../assets/logo.svg";

export default function Logo() {
  return (
    <div className="logo">
      <Link to="/">
        <img src={LogoImg} alt="logo" className="img-fluid" />
      </Link>
    </div>
  );
}
