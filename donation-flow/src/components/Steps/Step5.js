import React, { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import formData from "../../data";

export default function Step5({ title }) {
  const { state, dispatch } = useContext(FormContext);

  function handleChange(e) {
    dispatch({ type: "update-payment-type", payment_type: e.target.value });
  }

  function handleCCChange(e) {
    dispatch({ type: "update-credit-card", key: e.target.name, value: e.target.value });
  }

  return (
    <>
      <h2>Step 5 - {title}</h2>

      <select name="donation" size={formData.payment_type.length} onChange={e => handleChange(e)}>
        {formData.payment_type.map(type => (
          <option value={type}>{type}</option>
        ))}
      </select>

      {state.payment_type === "credit_card" ? (
        <>
          <label htmlFor="frmNameCC">Name on card</label>
          <input
            type="text"
            name="ccname"
            id="frmNameCC"
            value={state.cc_info["ccname"]}
            required
            placeholder="Full Name"
            autoComplete="cc-name"
            onChange={e => handleCCChange(e)}
          />

          <label htmlFor="frmCCNum">Card Number</label>
          <input type="number" name="cardnumber" id="frmCCNum" required autoComplete="cc-number" onChange={e => handleCCChange(e)} />

          <label htmlFor="frmCCCVC">CVC</label>
          <input type="number" name="cvc" id="frmCCCVC" required autoComplete="cc-csc" onChange={e => handleCCChange(e)} />

          <label htmlFor="frmCCExp">Expiry</label>
          <input name="cc-exp" id="frmCCExp" required placeholder="MM-YYYY" autoComplete="cc-exp" onChange={e => handleCCChange(e)} />
        </>
      ) : (
        <button>Pay w/ PayPal</button>
      )}
    </>
  );
}
