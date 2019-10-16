import React, { useContext, useState } from "react";

import StepTitle from "../StepTitle/StepTitle";
import StepButton from "../StepButton/StepButton";
import { FormContext } from "../../context/FormContext";
import formData from "../../data";
import "./Step4.scss";

export default function Step4() {
  const { state, dispatch } = useContext(FormContext);
  const [donationHonour, setDonationHonour] = useState(state.donation_honour);

  function nextStep(value) {
    dispatch({ type: "update-donation-honour", donation_honour: value });
    dispatch({ type: "step-forward" });
  }

  return (
    <div className="Step4">
      <StepTitle text="Is this gift in honour, in memory or in thanks of someone?" />
      <div className="buttons-container">
        {formData.donation_honour.map(type => (
          <StepButton text={type} selected={type === donationHonour} onClick={() => nextStep(type)}></StepButton>
        ))}
      </div>
    </div>
  );
}
