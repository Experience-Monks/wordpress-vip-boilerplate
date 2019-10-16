import React, { useEffect, useState } from "react";
import classnames from "classnames";
import { ReactComponent as BackArrow } from "../../assets/svg/back_arrow.svg";
import "./BackButton.scss";

export default function BackButton({ text, onClick }) {
  return (
    <div className="BackButton" onClick={onClick}>
      <BackArrow />
      <span className="text">{text}</span>
    </div>
  );
}
