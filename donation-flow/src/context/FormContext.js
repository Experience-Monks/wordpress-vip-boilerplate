import { createContext } from "react";

export const initialState = {
  current_step: 0,
  corporation_name: "",
  donation_amount: null,
  donation_type: null,
  donation_honour: null,
  donation_frecuency: null,
  in_honour: {
    name: "",
    last_name: "",
    message: ""
  },
  payment_type: null,
  cc_info: {},
  billing_info: {},
  personal_info: {},
  billing_as_personal: false,
  is_anonymous: false
};

export function formReducer(state, action) {
  switch (action.type) {
    // Step handling
    case "set-step":
      return { ...state, current_step: action.step };
    case "step-forward":
      return { ...state, current_step: state.current_step + 1 };
    case "step-backward":
      return { ...state, current_step: state.current_step - 1 };
    // Data handling
    case "update-corporation-name":
      return { ...state, corporation_name: action.corporation_name };
    case "update-donation-type":
      return { ...state, donation_type: action.donation_type };
    case "update-donation-amount":
      return { ...state, donation_amount: action.donation_amount };
    case "update-donation-frecuency":
      return { ...state, donation_frecuency: action.donation_frecuency };
    case "update-donation-honour":
      return { ...state, donation_honour: action.donation_honour };
    case "update-honour-name":
      return { ...state, in_honour: { ...state.in_honour, name: action.honour_name } };
    case "update-honour-last-name":
      return { ...state, in_honour: { ...state.in_honour, last_name: action.honour_last_name } };
    case "update-honour-message":
      return { ...state, in_honour: { ...state.in_honour, message: action.honour_message } };
    case "update-payment-type":
      return { ...state, payment_type: action.payment_type };
    case "update-credit-card":
      return { ...state, cc_info: { ...state.cc_info, [action.key]: action.value } };
    case "update-billing-as-personal":
      return { ...state, billing_as_personal: !state.billing_as_personal };
    case "update-is-anonymous":
      return { ...state, is_anonymous: !state.is_anonymous };
    case "update-billing-info":
      return { ...state, billing_info: { ...state.billing_info, [action.key]: action.value } };
    case "update-personal-info":
      return { ...state, personal_info: { ...state.personal_info, [action.key]: action.value } };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export const FormContext = createContext(null);
