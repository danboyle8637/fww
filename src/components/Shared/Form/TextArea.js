import React from "react";
import styled from "styled-components";

import { ElementContainer } from "../../../styles/Containers";

const TextArea = props => {
  const { labelFor, labelName } = props;

  const isError = !props.initial && !props.valid;
  const isValid = !props.touched && props.valid;

  return (
    <ElementContainer>
      <InputContainer touched={props.touched} error={isError} valid={isValid}>
        <InputLabel labelFor={labelFor}>
          <span>{labelName}</span>
          <Area isValid={isValid} rows="4" {...props} />
        </InputLabel>
      </InputContainer>
    </ElementContainer>
  );
};

export default TextArea;

const InputContainer = styled.div`
  margin: 0;
  padding: 8px 12px;
  background-color: ${props =>
    props.touched
      ? props.theme.headlinePrimary
      : props.error
      ? props.theme.formErrorBackground
      : props.valid
      ? props.theme.mainBackgroundColor
      : props.theme.accentBackgroundColor};
  border-radius: 6px;
  box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.3);
  width: 100%;
  transition: background-color 100ms ease-in-out;
`;

const InputLabel = styled.label`
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 1.4px;
  color: ${props => props.theme.whiteText};
  text-transform: uppercase;
`;

const Area = styled.textarea`
  margin: 0;
  padding: 8px;
  background: ${props => props.theme.mainBackgroundColor};
  border: none;
  border-radius: 6px;
  font-size: 18px;
  color: ${props =>
    props.isValid ? props.theme.accentBackgroundColor : props.theme.bodyText};
  width: 100%;
`;
