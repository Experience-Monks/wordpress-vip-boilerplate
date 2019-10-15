import React, { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import formData from "../../data";

export function Step4({ title }) {
  const { dispatch } = useContext(FormContext);

  function handleChange(e) {
    dispatch({ type: "update-donation-honour", donation_honour: e.target.value });
  }

  return (
    <>
      <h2>Step 4 - {title}</h2>
      <select name="donation" size={formData.gift_type.length} onChange={e => handleChange(e)}>
        {formData.gift_type.map(type => (
          <option value={type}>{type}</option>
        ))}
      </select>
    </>
  );
}

export function HonourName({ title }) {
  const { dispatch } = useContext(FormContext);

  return (
    <>
      <h2>Step 4.1 - {title}</h2>
      <input type="text" onChange={e => dispatch({ type: "update-honour-name", honour_name: e.target.value })}></input>
      <input type="text" onChange={e => dispatch({ type: "update-honour-last-name", honour_last_name: e.target.value })}></input>
    </>
  );
}

export function HonourMessage({ title }) {
  const { dispatch } = useContext(FormContext);

  return (
    <>
      <h2>Step 4.2 - {title}</h2>
      <input type="text" onChange={e => dispatch({ type: "update-honour-message", honour_message: e.target.value })}></input>
    </>
  );
}
