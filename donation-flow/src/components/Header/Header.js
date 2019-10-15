import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import checkProps from "@jam3/react-check-extra-props";
import { ReactComponent as SMHLogo } from "../../assets/svg/logo-smh-white.svg";
import { ReactComponent as BackHome } from "../../assets/svg/back_home.svg";

import "./Header.scss";

export default function Header({ className }) {
  return (
    <header className={classnames("Header", className)}>
      <SMHLogo />
      <div className="back-home-container">
        <BackHome /> Back Home
      </div>
      <div className="step-counter">Step 01 of 12</div>
    </header>
  );
}
