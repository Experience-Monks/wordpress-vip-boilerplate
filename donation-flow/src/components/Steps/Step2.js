import React, { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import formData from "../../data";

export function Step2({ title }) {
  const { state, dispatch } = useContext(FormContext);

  function handleChange(e) {
    dispatch({ type: "update-donation-type", donation_type: e.target.value });
  }

  return (
    <>
      <h2>Step 2 - {title}</h2>
      <select name="donation" size={formData.donation_amounts.length} onChange={e => handleChange(e)} value={state.donation_type}>
        {formData.donation_types.map(type => (
          <option value={type}>{type}</option>
        ))}
      </select>
    </>
  );
}

export function CorporationName({ title }) {
  const { state, dispatch } = useContext(FormContext);

  return (
    <>
      <h2>Step 2.1 - {title}</h2>
      <input
        type="text"
        value={state.corporation_name}
        onChange={e => dispatch({ type: "update-corporation-name", corporation_name: e.target.value })}
      ></input>
    </>
  );
}
