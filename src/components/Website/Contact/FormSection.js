import React from "react";
import styled from "styled-components";

import { SectionContainer, ContentContainer } from "../../../styles/Containers";
import TextInput from "../../Shared/Form/TextInput";
import TextArea from "../../Shared/Form/TextArea";
import RadioInput from "../../Shared/Form/RadioInput";
import { useFormStore } from "../../../context/FormContext";
import useContactFormControls from "../../../hooks/useContactFormControls";

const FormSection = () => {
  // eslint-disable-next-line
  const [formState, dispatch] = useFormStore();
  const { updateFormValue, updateFormOptions } = useContactFormControls();

  return (
    <SectionContainer>
      <ContentContainer>
        <ContactForm>
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
            labelInstructions="Where should I send my answer?"
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
          <RadioInput
            type="radio"
            name="howCanIHelp"
            labelName="What can I help you with"
            value={formState.howCanIHelpValue.value}
            options={formState.howCanIHelpValue.options}
            updateFormValue={updateFormValue}
          />
          <TextArea
            name="tellMeMore"
            labelName="Tell me more:"
            labelFor="tellMeMore"
            labelInstructions="Please be specific..."
            labelError="I need more to help you!"
            value={formState.tellMeMoreValue.value}
            valid={formState.tellMeMoreValue.valid}
            initial={formState.tellMeMoreOptions.initial}
            touched={formState.tellMeMoreOptions.touched}
            showInstructions={formState.tellMeMoreOptions.showInstructions}
            onChange={updateFormValue}
            onFocus={updateFormOptions}
            onBlur={updateFormOptions}
          />
        </ContactForm>
      </ContentContainer>
    </SectionContainer>
  );
};

export default FormSection;

const ContactForm = styled.form`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, auto);
  row-gap: 30px;
`;
