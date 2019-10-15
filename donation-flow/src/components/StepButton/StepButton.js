import React, { useEffect, useState } from "react";
import "./StepButton.scss";

export default function StepButton({ text, onClick }) {
  return <button className="StepButton" dangerouslySetInnerHTML={{ __html: text }} onClick={onClick}></button>;
}
