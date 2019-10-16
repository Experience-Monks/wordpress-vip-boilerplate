import React, { useEffect, useState } from "react";
import classnames from "classnames";
import "./InputText.scss";

export default function InputText({ value, placeholder, onChange, type = "text", ...rest }) {
  return <input className={classnames("InputText")} type={type} value={value} placeholder={placeholder} onChange={onChange} {...rest}></input>;
}
