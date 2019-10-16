import React, { useReducer } from "react";
import "./App.scss";

import Header from "./components/Header/Header";
import Wizard from "./components/Wizard/Wizard";

import Step1 from "./components/Steps/Step1";
import Step2 from "./components/Steps/Step2";
import CorporationName from "./components/Steps/CorporationName";
import Step3 from "./components/Steps/Step3";
import Step4 from "./components/Steps/Step4";
import HonourName from "./components/Steps/HonourName";
import HonourMessage from "./components/Steps/HonourMessage";
import Step5 from "./components/Steps/Step5";
import Step6 from "./components/Steps/Step6";
import Step7 from "./components/Steps/Step7";
import Step8 from "./components/Steps/Step8";
import Step9 from "./components/Steps/Step9";
import StepResults from "./components/StepResults/StepResults";

import { FormContext, formReducer, initialState } from "./context/FormContext";

function App() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <div className="App">
      <Header />
      <FormContext.Provider value={{ state, dispatch }}>
        <Wizard>
          {/* <Step1 title="Donation Amount" />
          <Step2 title="Personal or Corporal" />
          {state.donation_type === "Corporate" && <CorporationName title="Corporation Name" />}
          <Step3 title="Monthly or one time" />
          <Step4 title="Honour a person" />
          {state.donation_honour === "Yes" && <HonourName title="Honour Name" />}
          {state.donation_honour === "Yes" && <HonourMessage title="Honour Message" />}
          <Step5 title="Payment information" /> */}
          <Step6 title="Billing information" />
          <Step7 title="Personal information" />
          <Step8 title="Donation Summary" />
          <Step9 title="Thank you" />
        </Wizard>
        <StepResults />
      </FormContext.Provider>
    </div>
  );
}

export default App;
