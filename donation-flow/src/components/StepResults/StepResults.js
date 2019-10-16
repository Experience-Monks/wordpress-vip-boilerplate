import React, { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import { ReactComponent as Heart } from "../../assets/svg/heart.svg";
import "./StepResults.scss";

export default function StepResults() {
  const { state, dispatch } = useContext(FormContext);

  return (
    <div className="StepResults">
      <div>{JSON.stringify(state, null, "\t")}</div>
      <div style={{ marginTop: "50px" }}>
        <Heart />
        {state.donation_amount ? `You are contributing with $${state.donation_amount}` : ""}
        {state.donation_type === "Personal" ? ` as a personal donation` : ""}
        {state.donation_type === "Corporate" ? ` as a corporate donation` : ""}
        {state.corporation_name ? ` for ${state.corporation_name}` : ""}
        {state.donation_frecuency === "Monthly" ? `. That’s a monthly payment` : ""}
        {state.donation_frecuency === "One Time" ? `. That’s a one time payment` : ""}
        {state.in_honour.name || state.in_honour.last_name ? ` and honour ${state.in_honour.name} ${state.in_honour.last_name}` : ""}
        {state.in_honour.message ? " with a personal message" : ""}
      </div>
    </div>
  );
}
