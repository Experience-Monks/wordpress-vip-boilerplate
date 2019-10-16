import React, { useContext, useState } from "react";

import StepTitle from "../StepTitle/StepTitle";
import StepButton from "../StepButton/StepButton";
import { FormContext } from "../../context/FormContext";
import formData from "../../data";
import "./Step2.scss";

export default function Step2() {
  const { state, dispatch } = useContext(FormContext);
  const [donationType, setDonationType] = useState(state.donation_type);

  function nextStep(value) {
    dispatch({ type: "update-donation-type", donation_type: value });
    dispatch({ type: "step-forward" });
  }

  return (
    <div className="Step2">
      <StepTitle text="Is this a personal or corporate donation?" />
      <div className="buttons-container">
        {formData.donation_types.map(type => (
          <StepButton text={type} selected={type === donationType} onClick={() => nextStep(type)}></StepButton>
        ))}
      </div>
    </div>
  );
}
