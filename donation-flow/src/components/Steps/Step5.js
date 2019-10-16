import React, { useContext, useState, useEffect } from "react";
import StepTitle from "../StepTitle/StepTitle";
import StepButton from "../StepButton/StepButton";
import InputText from "../InputText/InputText";
import { FormContext } from "../../context/FormContext";
import formData from "../../data";
import "./Step5.scss";

export default function Step5() {
  const { state, dispatch } = useContext(FormContext);
  const [paymentType, setPaymentType] = useState(state.payment_type);

  function handleChangePaymentType(type) {
    setPaymentType(type);
    dispatch({ type: "update-payment-type", payment_type: type });
  }

  function handleCCChange(e) {
    dispatch({ type: "update-credit-card", key: e.target.name, value: e.target.value });
  }

  return (
    <div className="Step5">
      <StepTitle text="Payment Information" />
      <div className="main-container">
        <div className="buttons-container">
          {formData.payment_type.map(type => (
            <StepButton text={type} selected={type === paymentType} onClick={() => handleChangePaymentType(type)}></StepButton>
          ))}
        </div>

        <div className="inputs-container">
          <InputText value={state.cc_info["ccname"]} placeholder="Name on Card" onChange={handleCCChange} name="ccname" autoComplete="off" />
          <InputText
            value={state.cc_info["cardnumber"]}
            placeholder="Card Number"
            onChange={handleCCChange}
            name="cardnumber"
            type="number"
            autoComplete="off"
          />
          <InputText value={state.cc_info["cvc"]} placeholder="CCV" onChange={handleCCChange} type="number" name="cvc" autoComplete="off" />
          <InputText value={state.cc_info["cc-exp"]} placeholder="Expiration Date" onChange={handleCCChange} name="cc-exp" autoComplete="off" />
        </div>
      </div>
      <div className="next-container">
        <StepButton text="Next" onClick={() => dispatch({ type: "step-forward" })}></StepButton>
      </div>
    </div>
  );
}
