import React, { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import CountriesOptions from "./CountriesOptions";

export default function Step7({ title }) {
  const { state, dispatch } = useContext(FormContext);
  const store = state.billing_as_personal ? state.billing_info : state.personal_info;

  return (
    <>
      <h2>Step 7 - {title}</h2>
      <p style={{ color: "red" }}>{state.billing_as_personal ? "Same as personal" : "Not the same"}</p>

      <div>
        <label htmlFor="first_name">First Name</label>
        <input type="text" id="" value={store.first_name} />

        <label htmlFor="last_name">Last Name</label>
        <input type="text" id="last_name" value={store.last_name} />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={store.email} />

        <label htmlFor="address">Address</label>
        <input type="text" id="address" value={store.address} />

        <label htmlFor="phone_number">Phone Number</label>
        <input type="tel" id="phone_number" value={store.phone_number} />

        <CountriesOptions reducerCallback={() => console.log("Calling Reducer Callback")} value={store.country} />

        <label htmlFor="city">City</label>
        <input type="text" id="city" value={store.city} />

        <label htmlFor="state">State</label>
        <input type="text" id="state" value={store.state} />

        <label htmlFor="postal_code">Postal Code</label>
        <input type="text" id="postal_code" value={store.postal_code} />
      </div>
    </>
  );
}
