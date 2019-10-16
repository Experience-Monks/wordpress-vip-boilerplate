import React, { useEffect, useState, useContext } from "react";
import "./Wizard.scss";
import { FormContext } from "../../context/FormContext";

import StepButton from "../StepButton/StepButton";
import BackButton from "../BackButton/BackButton";

export default function Wizard({ children }) {
  const { state, dispatch } = useContext(FormContext);

  // listen to enter
  useEffect(() => {
    document.addEventListener("keydown", e => handleKeyboardEnter(e));
    return () => {
      document.removeEventListener("keydown", e => handleKeyboardEnter(e));
    };
  }, []);

  useEffect(() => {
    console.log("use effect getting called");
    const state = children.filter(Boolean).length;
    console.log(state);
  }, [children]);

  function handleKeyboardEnter(e) {
    if (e.keyCode === 13) {
      // Enter
      dispatch({ type: "step-forward" });
    }
    if (e.keyCode === 37) {
      // Left arrow
      dispatch({ type: "step-backward" });
    }
    if (e.keyCode === 39) {
      // Right arrow
      dispatch({ type: "step-forward" });
    }
  }

  return (
    <div className="Wizard">
      {children.filter(Boolean)[state.current_step]}
      {/* <div>
        {state.current_step < children.filter(Boolean).length - 1 && (
          <StepButton text="Next" onClick={() => dispatch({ type: "step-forward" })}></StepButton>
        )}
      </div> */}
      {/* <div className="admin-skip-steps">
        <span>Skip Steps</span>
        {children.filter(Boolean).map((step, i) => (
          <button onClick={() => dispatch({ type: "set-step", step: i })}>{i + 1}</button>
        ))}
      </div> */}
      {state.current_step !== 0 && <BackButton text={"Previous"} onClick={() => dispatch({ type: "step-backward" })} />}
    </div>
  );
}
