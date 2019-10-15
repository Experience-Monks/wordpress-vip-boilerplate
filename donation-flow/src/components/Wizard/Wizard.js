import React, { useEffect, useState, useContext } from "react";
import "./Wizard.scss";
import { FormContext } from "../../context/FormContext";

import StepButton from "../StepButton/StepButton";

export default function Wizard({ children }) {
  const { state, dispatch } = useContext(FormContext);

  // listen to enter
  useEffect(() => {
    document.addEventListener("keydown", e => handleKeyboardEnter(e));
    return () => {
      document.removeEventListener("keydown", e => handleKeyboardEnter(e));
    };
  }, []);

  function handleSteps(type) {
    if (type === "forward") {
      if (state.current_step >= 0) {
        dispatch({ type: "set-step", step: state.current_step + 1 });
      }
    } else if (type === "backward") {
      if (state.current_step < children.filter(c => Boolean(c)).length) {
        dispatch({ type: "set-step", step: state.current_step - 1 });
      }
    }
  }

  function handleKeyboardEnter(e) {
    if (e.keyCode === 13) {
      // Enter
      handleSteps("forward");
    }
    if (e.keyCode === 37) {
      // Left arrow
      handleSteps("backward");
    }
    if (e.keyCode === 39) {
      // Right arrow
      handleSteps("forward");
    }
  }

  return (
    <div className="Wizard">
      {children.filter(Boolean)[state.current_step]}
      <div>
        {state.current_step !== 0 && <StepButton text="Previous" onClick={() => handleSteps("backward")}></StepButton>}
        {state.current_step < children.filter(Boolean).length - 1 && <StepButton text="Next" onClick={() => handleSteps("forward")}></StepButton>}
      </div>
      <div className="admin-skip-steps">
        <span>Skip Steps</span>
        {children.filter(Boolean).map((step, i) => (
          <button onClick={() => dispatch({ type: "set-step", step: i })}>{i + 1}</button>
        ))}
      </div>
    </div>
  );
}
