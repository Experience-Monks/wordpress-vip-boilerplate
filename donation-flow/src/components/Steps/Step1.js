import React, { useContext, useState, useEffect } from "react";
import classnames from "classnames";

import StepTitle from "../StepTitle/StepTitle";
import StepButton from "../StepButton/StepButton";
import { FormContext } from "../../context/FormContext";
import formData from "../../data";
import "./Step1.scss";

export default function Step1() {
  const { state, dispatch } = useContext(FormContext);
  const [donationAmount, setDonationAmount] = useState(state.donation_amount || "");
  const [customClicked, setCustomClicked] = useState(state.donation_amount && !formData.donation_amounts.includes(Number(state.donation_amount)));

  function handleClick(e) {
    setCustomClicked(false);
    setDonationAmount(e.target.dataset.amount);
  }

  function handleCustomParentClick() {
    setDonationAmount("");
    setCustomClicked(!customClicked);
  }

  function handleCustomClick(e) {
    e.stopPropagation();
  }

  function handleCustomChange(e) {
    console.log(e.target.value);
    setDonationAmount(e.target.value);
  }

  function nextStep() {
    dispatch({ type: "update-donation-amount", donation_amount: donationAmount });
    dispatch({ type: "step-forward" });
  }

  return (
    <div className="Step1">
      <div className="top-portion">
        <StepTitle text="Select donation amount." fullWidth />
        <div className="circle-container">
          {formData.donation_amounts.map(amount => (
            <div className={classnames("CircleSelect", { selected: amount == donationAmount })} data-amount={amount} onClick={e => handleClick(e)}>
              {amount}
            </div>
          ))}
          <div className={classnames("CircleSelect", { selected: customClicked })} onClick={e => handleCustomParentClick(e)}>
            {customClicked ? (
              <input type="number" value={donationAmount} onClick={e => handleCustomClick(e)} onChange={e => handleCustomChange(e)} />
            ) : (
              "Other"
            )}
          </div>
        </div>
      </div>

      <StepButton text="Next" onClick={() => nextStep()} disabled={!donationAmount}></StepButton>
    </div>
  );
}
