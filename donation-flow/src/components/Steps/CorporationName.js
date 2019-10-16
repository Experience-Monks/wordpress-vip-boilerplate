import React, { useContext, useState } from "react";

import StepTitle from "../StepTitle/StepTitle";
import StepButton from "../StepButton/StepButton";
import InputText from "../InputText/InputText";
import { FormContext } from "../../context/FormContext";
import "./CorporationName.scss";

export default function CorporationName() {
  const { state, dispatch } = useContext(FormContext);

  function handleOnChangeName(e) {
    dispatch({ type: "update-corporation-name", corporation_name: e.target.value });
  }

  return (
    <div className="CorporationName">
      <StepTitle text="Tell us the name of the corporation making this donation?" />
      <div className="container">
        <InputText value={state.corporation_name} placeholder={"Corporation name"} onChange={handleOnChangeName} />
        <StepButton text="Next" onClick={() => dispatch({ type: "step-forward" })} disabled={!state.corporation_name}></StepButton>
      </div>
    </div>
  );
}
