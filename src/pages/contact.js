import React from "react";

import FormSection from "../components/Website/Contact/FormSection";
import { FormStore } from "../context/FormContext";
import { formState, formReducer } from "../reducers/formReducer";

const Contact = () => {
  return (
    <FormStore initialState={formState} reducer={formReducer}>
      <FormSection />
    </FormStore>
  );
};

export default Contact;
