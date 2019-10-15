import React, { useContext, useState, useEffect } from "react";
import classnames from "classnames";

import StepTitle from "../StepTitle/StepTitle";
import { FormContext } from "../../context/FormContext";
import formData from "../../data";
import "./Step1.scss";

export default function Step1({ title }) {
  const [donationAmount, setDonationAmount] = useState();
  const [customClicked, setCustomClicked] = useState();
  const { state, dispatch } = useContext(FormContext);

  function handleClick(e) {
    setCustomClicked(false);
    setDonationAmount(e.target.dataset.amount);
    //dispatch({ type: "update-donation-amount", donation_amount: e.target.dataset.amount });
  }

  function handleCustomParentClick() {
    setDonationAmount(null);
    setCustomClicked(!customClicked);
  }

  function handleCustomClick(e) {
    e.stopPropagation();
  }

  function handleCustomChange(e) {
    setDonationAmount(e.target.value);
  }

  return (
    <div className="Step1">
      <StepTitle text="Select donation amount." />
      <div className="circle-container">
        {formData.donation_amounts.map(amount => (
          <div className={classnames("CircleSelect", { selected: amount == donationAmount })} data-amount={amount} onClick={e => handleClick(e)}>
            {amount}
          </div>
        ))}
        <div className={classnames("CircleSelect", { selected: customClicked })} onClick={e => handleCustomParentClick(e)}>
          {customClicked ? <input type="number" onClick={e => handleCustomClick(e)} onChange={e => handleCustomChange(e)} /> : "Other"}
        </div>
      </div>
    </div>
  );
}
