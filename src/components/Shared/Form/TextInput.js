import React from "react";
import styled from "styled-components";

import { ElementContainer } from "../../../styles/Containers";
import FormCheck from "../../../svgs/FormCheck";
import FormInstructions from "../../../Animations/ReactTransitions/FormInstructions";
import MainLabelTransition from "../../../Animations/ReactTransitions/MainLabelTransition";

const TextInput = props => {
  const { labelName, labelFor, labelInstructions, labelError } = props;

  const isNormal = props.initial && !props.touched && !props.error;
  const isError = !props.initial && !props.valid;
  const isValid = !props.touched && props.valid;
  const isTouched = props.touched;

  return (
    <ElementContainer>
      <InputContainer touched={props.touched} error={isError} valid={isValid}>
        <FormInstructions isTouched={isTouched}>
          <HelpLabel htmlFor={labelFor}>{labelInstructions}</HelpLabel>
        </FormInstructions>
        <FormInstructions isTouched={isError && !isTouched}>
          <HelpLabel htmlFor={labelFor}>{labelError}</HelpLabel>
        </FormInstructions>
        <MainLabelTransition isTouched={isNormal}>
          <InputLabel htmlFor={labelFor}>{labelName}</InputLabel>
        </MainLabelTransition>
        {isValid && <CheckMark />}
        <Input isValid={isValid} {...props} />
      </InputContainer>
    </ElementContainer>
  );
};

export default TextInput;

const InputContainer = styled.div`
  position: relative;
  padding: 2px 2px;
  display: flex;
  flex-direction: column;
  background-color: ${props =>
    props.touched
      ? props.theme.headlinePrimary
      : props.error
      ? props.theme.formErrorBackground
      : props.valid
      ? props.theme.mainBackgroundColor
      : props.theme.strongBodyText};
  border-radius: 6px;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.3);
  width: 100%;
  transition: background-color 100ms ease-in-out;
`;

const InputLabel = styled.label`
  position: absolute;
  top: 50%;
  left: 0;
  margin: 0;
  padding: 1px 8px;
  display: inline;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 1.4px;
  color: ${props => props.theme.whiteText};
  background: ${props => props.theme.mainBackgroundColor};
  text-transform: uppercase;
  pointer-events: none;
  transform: translate(10%, -50%);
`;

const HelpLabel = styled(InputLabel)`
  font-size: 13px;
  color: ${props => props.theme.bodyText};
`;

const Input = styled.input`
  margin: 0;
  padding: 8px;
  background: ${props => props.theme.mainBackgroundColor};
  border: none;
  border-radius: 4px;
  font-size: 18px;
  font-weight: 400;
  color: ${props =>
    props.isValid ? props.theme.accentBackgroundColor : props.theme.bodyText};
  width: 100%;
  outline: none;
`;

const CheckMark = styled(FormCheck)`
  position: absolute;
  top: 50%;
  right: 5%;
  width: 22px;
  transform: translate(0, -50%);
`;
