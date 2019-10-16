import React, { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import CountriesOptions from "./CountriesOptions";
import CheckBox from "../CheckBox/CheckBox";
import StepButton from "../StepButton/StepButton";
import StepTitle from "../StepTitle/StepTitle";
import InputText from "../InputText/InputText";

import "./Step6.scss";

export default function Step6({ title }) {
  const { state, dispatch } = useContext(FormContext);

  function handlePersonalInformation(e) {
    dispatch({ type: "update-billing-info", key: e.target.name, value: e.target.value });
  }

  return (
    <div className="Step6">
      <StepTitle text="Billing Information" />

      <div className="inputs-container">
        <div className="first-line">
          <InputText value={state.billing_info["first_name"]} placeholder="First Name" onChange={handlePersonalInformation} name="first_name" />
          <InputText value={state.billing_info["last_name"]} placeholder="Last Name" onChange={handlePersonalInformation} name="last_name" />
          <InputText value={state.billing_info["email"]} placeholder="Email" onChange={handlePersonalInformation} name="email" type="email" />
        </div>
        <div className="second-line">
          <InputText value={state.billing_info["address"]} placeholder="Address" onChange={handlePersonalInformation} name="address" />
          <InputText value={state.billing_info["phone_number"]} placeholder="Phone Number" onChange={handlePersonalInformation} name="phone_number" />
        </div>
        <div className="third-line">
          <CountriesOptions reducerCallBack={handlePersonalInformation} value={state.billing_info.country} />
          <InputText value={state.billing_info["city"]} placeholder="City" onChange={handlePersonalInformation} name="city" />
          <InputText value={state.billing_info["state"]} placeholder="State" onChange={handlePersonalInformation} name="state" />
          <InputText value={state.billing_info["postal_code"]} placeholder="Postal Code" onChange={handlePersonalInformation} name="postal_code" />
        </div>
      </div>

      <CheckBox
        id="frmPersonalInformation"
        label="Use as my personal information"
        onChange={() => dispatch({ type: "update-billing-as-personal" })}
        checked={state.billing_as_personal}
      />
      <CheckBox
        id="frmIsAnonymous"
        label="Make an anonymous donation"
        onChange={() => dispatch({ type: "update-is-anonymous" })}
        checked={state.is_anonymous}
      />

      <div className="next-container">
        <StepButton text="Next" onClick={() => dispatch({ type: "step-forward" })}></StepButton>
      </div>
    </div>
  );
}
