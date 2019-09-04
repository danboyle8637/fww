import React from "react";
import styled from "styled-components";

import {
  SectionContainer,
  ContentContainer,
  ElementContainer,
} from "../../../styles/Containers";
import { FormButton } from "../../../styles/Buttons";
import TextInput from "../../Shared/Form/TextInput";
import RadioInput from "../../Shared/Form/RadioInput";
import { useFormStore } from "../../../context/FormContext";
import useContactFormControls from "../../../hooks/useContactFormControls";
import { above } from "../../../styles/Theme";

const ResetStep1Form = () => {
  const [formState, dispatch] = useFormStore();
  const { updateFormValue, updateFormOptions } = useContactFormControls();

  const handleFormSubmit = event => {
    event.preventDefault();
    console.log("Go to step 2");
  };

  return (
    <SectionContainer>
      <ContentContainer>
        <Step1Form>
          <RadioInput
            type="radio"
            name="biggestObstacle"
            labelName="What is your biggest obstacle?"
            value={formState.biggestObstacleValue.value}
            options={formState.biggestObstacleValue.options}
            updateFormValue={updateFormValue}
          />
          <TextInput
            type="text"
            name="firstName"
            labelName="name:"
            labelFor="firstName"
            labelInstructions="Only enter your first name..."
            labelError="You need at least two characters..."
            value={formState.firstNameValue.value}
            valid={formState.firstNameValue.valid}
            initial={formState.firstNameOptions.initial}
            touched={formState.firstNameOptions.touched}
            showInstructions={formState.firstNameOptions.showInstructions}
            onChange={updateFormValue}
            onFocus={updateFormOptions}
            onBlur={updateFormOptions}
          />
          <TextInput
            type="text"
            name="emailAddress"
            labelName="email:"
            labelFor="emailAddress"
            labelInstructions="The email for your account"
            labelError="Please use a valid email address..."
            value={formState.emailAddressValue.value}
            valid={formState.emailAddressValue.valid}
            initial={formState.emailAddressOptions.initial}
            touched={formState.emailAddressOptions.touched}
            showInstructions={formState.emailAddressOptions.showInstructions}
            onChange={updateFormValue}
            onFocus={updateFormOptions}
            onBlur={updateFormOptions}
          />
          <ElementContainer>
            <FormButton type="submit" onClick={handleFormSubmit}>
              Choose My Program!
            </FormButton>
          </ElementContainer>
        </Step1Form>
      </ContentContainer>
    </SectionContainer>
  );
};

export default ResetStep1Form;

const Step1Form = styled.form`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, auto);
  row-gap: 30px;
  width: 100%;
  ${above.mobile`
    max-width: 33rem;
  `}
  ${above.tablet`
    max-width: 44rem;
  `}
`;
