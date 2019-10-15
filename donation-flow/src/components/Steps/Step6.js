import React, { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import CountriesOptions from "./CountriesOptions";

export default function Step6({ title }) {
  const { state, dispatch } = useContext(FormContext);

  function handlePersonalInformation(e) {
    dispatch({ type: "update-billing-info", key: e.target.name, value: e.target.value });
  }

  return (
    <>
      <h2>Step 6 - {title}</h2>

      <div>
        <label htmlFor="first_name">First Name</label>
        <input type="text" id="first_name" name="first_name" value={state.billing_info.first_name} onChange={e => handlePersonalInformation(e)} />

        <label htmlFor="last_name">Last Name</label>
        <input type="text" id="last_name" name="last_name" value={state.billing_info.last_name} onChange={e => handlePersonalInformation(e)} />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={state.billing_info.email} onChange={e => handlePersonalInformation(e)} />

        <label htmlFor="address">Address</label>
        <input type="text" id="address" name="address" value={state.billing_info.address} onChange={e => handlePersonalInformation(e)} />

        <label htmlFor="phone_number">Phone Number</label>
        <input
          type="tel"
          id="phone_number"
          name="phone_number"
          value={state.billing_info.phone_number}
          onChange={e => handlePersonalInformation(e)}
        />

        <CountriesOptions reducerCallBack={handlePersonalInformation} value={state.billing_info.country} />

        <label htmlFor="city">City</label>
        <input type="text" id="city" name="city" value={state.billing_info.city} onChange={e => handlePersonalInformation(e)} />

        <label htmlFor="state">State</label>
        <input type="text" id="state" name="state" value={state.billing_info.state} onChange={e => handlePersonalInformation(e)} />

        <label htmlFor="postal_code">Postal Code</label>
        <input type="text" id="postal_code" name="postal_code" value={state.billing_info.postal_code} onChange={e => handlePersonalInformation(e)} />
      </div>

      <div>
        <input
          type="checkbox"
          selected={state.billing_as_personal}
          id="frmPersonalInformation"
          value={state.billing_as_personal}
          onChange={() => dispatch({ type: "update-billing-as-personal" })}
        />
        <label for="frmPersonalInformation">Use as my personal information</label>
      </div>
      <div>
        <input type="checkbox" selected={state.is_anonymous} id="frmIsAnonymous" onChange={() => dispatch({ type: "update-is-anonymous" })} />
        <label for="frmIsAnonymous">Make an anonymous donation</label>
      </div>
    </>
  );
}
