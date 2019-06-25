import React from "react";

import FormSection from "../components/Website/Contact/FormSection";
import { FormStore } from "../context/FormContext";
import LeadSection from "../components/Website/Contact/LeadSection";
import { formState, formReducer } from "../reducers/formReducer";

const Contact = () => {
  return (
    <FormStore initialState={formState} reducer={formReducer}>
      <LeadSection />
      <FormSection />
    </FormStore>
  );
};

export default Contact;
