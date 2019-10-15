import React, { useContext } from "react";
import { FormContext } from "../../context/FormContext";
import 'Resulrs'

export default function Results() {
  const { state, dispatch } = useContext(FormContext);

  return <div>{JSON.stringify(state, null, "\t")}</div>;
}
