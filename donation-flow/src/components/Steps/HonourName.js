import React, { useContext, useState } from "react";

import StepTitle from "../StepTitle/StepTitle";
import StepButton from "../StepButton/StepButton";
import InputText from "../InputText/InputText";
import { FormContext } from "../../context/FormContext";
import "./HonourName.scss";

export default function HonourName() {
  const { state, dispatch } = useContext(FormContext);

  function handleOnChangeName(e) {
    dispatch({ type: "update-honour-name", honour_name: e.target.value });
  }

  function handleOnChangeLastName(e) {
    dispatch({ type: "update-honour-last-name", honour_last_name: e.target.value });
  }

  return (
    <div className="HonourName">
      <StepTitle text="Tell us a little bit about this amazing person." />
      <div className="container">
        <InputText value={state.in_honour.name} placeholder={"First Name"} onChange={handleOnChangeName} />
        <InputText value={state.in_honour.last_name} placeholder={"Last Name"} onChange={handleOnChangeLastName} />
        <StepButton
          text="Next"
          onClick={() => dispatch({ type: "step-forward" })}
          disabled={!state.in_honour.name || !state.in_honour.last_name}
        ></StepButton>
      </div>
    </div>
  );
}
