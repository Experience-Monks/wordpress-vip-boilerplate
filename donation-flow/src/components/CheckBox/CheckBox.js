import React, { useEffect, useState } from "react";
import classnames from "classnames";
import "./CheckBox.scss";

export default function CheckBox({ id, label, checked, onChange }) {
  return (
    <span className="CheckBox">
      <input type="checkbox" id={id} onChange={onChange} defaultChecked={checked} />
      <label for={id}>{label}</label>
    </span>
  );
}
