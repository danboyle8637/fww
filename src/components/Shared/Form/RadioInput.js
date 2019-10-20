import React from "react";
import styled from "styled-components";

const RadioInput = ({ name, labelName, options, updateFormValue }) => {
  const radios = options.map(radio => {
    return (
      <InputLabel htmlFor={radio.value} key={radio.value}>
        <HiddenRadioInput
          type="radio"
          id={radio.value}
          name={name}
          value={radio.value}
          checked={radio.checked}
          onChange={updateFormValue}
        />
        <FormRadioInput checked={radio.checked} />
        {radio.displayValue}
      </InputLabel>
    );
  });

  return (
    <InputContainer>
      <InputLabel>{labelName}</InputLabel>
      {radios}
    </InputContainer>
  );
};

export default RadioInput;

const InputContainer = styled.div`
  margin: 0;
  padding: 8px 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  border-radius: 6px;
  width: 100%;
`;

const InputLabel = styled.label`
  margin: 0 0 12px 0;
  padding: 0;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 1.4px;
  color: ${props => props.theme.whiteText};
  text-transform: uppercase;
  &:last-child {
    margin-bottom: 0;
  }
`;

const HiddenRadioInput = styled.input.attrs({ type: "radio" })`
  visibility: hidden;
  margin: 0;
  width: 0;
`;

const FormRadioInput = styled.div`
  margin: 0 12px 0 0;
  display: inline-block;
  width: 24px;
  height: 24px;
  background: ${props =>
    props.checked
      ? props.theme.secondaryAccent
      : props.theme.mainBackgroundColor};
  border-radius: 12px;
  border: 2px solid;
  border-color: ${props => props.theme.strongBodyText};
`;
