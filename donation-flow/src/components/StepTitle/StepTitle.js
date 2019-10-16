import React, { useEffect, useState } from "react";
import classnames from "classnames";
import "./StepTitle.scss";

export default function StepTitle({ text, fullWidth = false }) {
  return <h2 className={classnames("StepTitle", { fullWidth, fullWidth })} dangerouslySetInnerHTML={{ __html: text }}></h2>;
}
