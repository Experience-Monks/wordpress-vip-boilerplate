import React, { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import formData from "../../data";

export default function Step3({ title }) {
  const { state, dispatch } = useContext(FormContext);

  function handleChange(e) {
    dispatch({ type: "update-donation-frecuency", donation_frecuency: e.target.value });
  }

  return (
    <>
      <h2>Step 3 - {title}</h2>
      <select name="donation" size={formData.donation_frecuency.length} onChange={e => handleChange(e)}>
        {formData.donation_frecuency.map(frecuency => (
          <option value={frecuency}>{frecuency}</option>
        ))}
      </select>
    </>
  );
}
