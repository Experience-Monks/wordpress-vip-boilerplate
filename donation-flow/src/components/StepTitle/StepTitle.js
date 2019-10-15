import React, { useEffect, useState } from "react";
import "./StepTitle.scss";

export default function StepTitle({ text }) {
  return <h2 className="StepTitle" dangerouslySetInnerHTML={{ __html: text }}></h2>;
}
