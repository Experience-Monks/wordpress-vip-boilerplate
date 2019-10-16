import React, { useEffect, useState } from "react";
import classnames from "classnames";
import "./StepButton.scss";

export default function StepButton({ text, selected = false, disabled = false, onClick }) {
  return (
    <button
      className={classnames("StepButton", { selected })}
      disabled={disabled}
      dangerouslySetInnerHTML={{ __html: text }}
      onClick={onClick}
    ></button>
  );
}
