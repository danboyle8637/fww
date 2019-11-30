import React from "react";
import styled from "styled-components";

import { ContentContainer, ElementContainer } from "../../../styles/Containers";
import BaseButton from "../../Buttons/BaseButton";
import TextInput from "../../Shared/Form/TextInput";
import TextArea from "../../Shared/Form/TextArea";
import RadioInput from "../../Shared/Form/RadioInput";
import { useFormStore } from "../../../context/FormContext";
import useContactFormControls from "../../../hooks/useContactFormControls";
import siteConfig from "../../../utils/siteConfig";
import { above } from "../../../styles/Theme";

const FormSection = ({
  isSyncing,
  setIsSyncing,
  setSyncMessage,
  setShowMessage,
  setDialogMessage,
}) => {
  const [formState, dispatchFormAction] = useFormStore();
  const { updateFormValue, updateFormOptions } = useContactFormControls();

  const handleFormSubmit = event => {
    event.preventDefault();
    setSyncMessage("Sending Message...");
    setIsSyncing(true);

    const contactUrl = `${siteConfig.functions.baseUrl}/fit-womens-weekly/us-central1/fwwContactPage`;

    const contactRequest = {
      firstName: formState.firstNameValue.value,
      email: formState.emailAddressValue.value,
      issue: formState.howCanIHelpValue.value,
      message: formState.tellMeMoreValue.value,
    };

    fetch(contactUrl, {
      method: "POST",
      body: JSON.stringify(contactRequest),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data.message);
        dispatchFormAction({ type: "resetContactForm" });
        setSyncMessage("✉️ Message sent!");
        setIsSyncing(false);
        setDialogMessage(
          "✉️ Your message has been sent I will get back to you in less than 24 hours!"
        );
        setShowMessage(true);
      })
      .catch(error => {
        console.log(error);
        dispatchFormAction({ type: "resetContactForm" });
        setSyncMessage("😢 Error. Try again!");
        setIsSyncing(false);
        setDialogMessage(
          "😢 Yikes, something went wrong. I reset the form... try again!"
        );
        setShowMessage(true);
      });
  };

  return (
    <SectionContainer>
      <ContentContainer>
        <ContactForm onSubmit={handleFormSubmit}>
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
            labelInstructions="What email should I respond to?"
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
          <ElementContainer justifyCenter>
            <BaseButton type="submit">
              {isSyncing ? "Sending Your Message" : "Help Me Out Kindal!"}
            </BaseButton>
          </ElementContainer>
        </ContactForm>
      </ContentContainer>
    </SectionContainer>
  );
};

export default FormSection;

const SectionContainer = styled.div`
  margin: 0 0 120px 0;
  display: flex;
  justify-content: center;
`;

const ContactForm = styled.form`
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
