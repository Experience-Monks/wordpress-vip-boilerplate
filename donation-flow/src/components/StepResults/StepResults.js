import React, { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import "./StepResults.scss";

export default function StepResults() {
  const { state, dispatch } = useContext(FormContext);

  return <div className="StepResults">{JSON.stringify(state, null, "\t")}</div>;
}
