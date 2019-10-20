import React from "react";

import { SectionContainer, ContentContainer } from "../styles/Containers";
import HeaderSection from "../components/Website/7DayResetStep1/HeaderSection";
import ResetStep1Form from "../components/Website/7DayResetStep1/ResetStep1Form";
import { FormStore } from "../context/FormContext";
import { formState, formReducer } from "../reducers/formReducer";

const SevenDayResetStep1 = () => {
  return (
    <FormStore initialState={formState} reducer={formReducer}>
      <>
        <HeaderSection />
        <ResetStep1Form />
      </>
    </FormStore>
  );
};

export default SevenDayResetStep1;
