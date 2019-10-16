import React, { useContext, useState } from "react";

import StepTitle from "../StepTitle/StepTitle";
import StepButton from "../StepButton/StepButton";
import InputText from "../InputText/InputText";
import { FormContext } from "../../context/FormContext";
import "./HonourMessage.scss";

export default function HonourMessage() {
  const { state, dispatch } = useContext(FormContext);

  function handleOnChangeMessage(e) {
    dispatch({ type: "update-honour-message", honour_message: e.target.value });
  }

  return (
    <div className="HonourMessage">
      <StepTitle text="Give thanks, honor, or encourage them." />
      <div className="container">
        <InputText value={state.in_honour.message} placeholder={"Add a personal message"} onChange={handleOnChangeMessage} />
        <StepButton text="Next" onClick={() => dispatch({ type: "step-forward" })} disabled={!state.in_honour.message}></StepButton>
      </div>
    </div>
  );
}
