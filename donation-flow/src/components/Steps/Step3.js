import React, { useContext, useState } from "react";

import StepTitle from "../StepTitle/StepTitle";
import StepButton from "../StepButton/StepButton";
import { FormContext } from "../../context/FormContext";
import formData from "../../data";
import "./Step3.scss";

export default function Step3({ title }) {
  const { state, dispatch } = useContext(FormContext);
  const [donationFrecuency, setDonationFrecuency] = useState(state.donation_frecuency);

  function nextStep(value) {
    dispatch({ type: "update-donation-frecuency", donation_frecuency: value });
    dispatch({ type: "step-forward" });
  }

  return (
    <div className="Step3">
      <StepTitle text="Is this a monthly or a one time donation?" />
      <div className="buttons-container">
        {formData.donation_frecuency.map(frecuency => (
          <StepButton text={frecuency} selected={frecuency === donationFrecuency} onClick={() => nextStep(frecuency)}></StepButton>
        ))}
      </div>
    </div>
  );
}
