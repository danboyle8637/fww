import React from "react";
import styled from "styled-components";

import FormCheck from "../../../../svgs/FormCheck";

const TextInput = props => {
  const {
    labelName,
    labelFor,
    labelInstructions,
    labelError,
    labelSuccess,
  } = props;

  const isError = !props.initial && !props.valid;
  const isValid = !props.touched && props.valid;
  const isTouched = props.touched;

  return (
    <InputLabel htmlFor={labelFor}>
      <Input valid={isValid} error={isError} touched={isTouched} {...props} />
      <TextLabel>
        {isTouched ? (
          <span>{labelInstructions}</span>
        ) : isError && !isTouched ? (
          <span>{labelError}</span>
        ) : isValid ? (
          <span>{labelSuccess}</span>
        ) : (
          <span>{labelName}</span>
        )}
      </TextLabel>
      {isValid ? <CheckMark /> : null}
    </InputLabel>
  );
};

export default TextInput;

const InputLabel = styled.label`
  position: relative;
  margin: 0;
  padding: 0;
`;

const TextLabel = styled.p`
  position: absolute;
  top: 100%;
  left: 5px;
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 1.4px;
  color: ${props => props.theme.bodyText};
  transform: translateY(5px);
`;

const Input = styled.input`
  position: relative;
  margin: 0;
  padding: 8px;
  background-color: ${props =>
    props.touched
      ? "rgba(90, 253, 242, 0.1)"
      : props.error
      ? "rgba(225, 64, 117, 0.1)"
      : props.valid
      ? "rgba(43, 44, 58, 0.1)"
      : "rgba(215, 218, 255, 0.1)"};
  border: 2px solid;
  border-color: ${props =>
    props.touched
      ? "#5AFDF2"
      : props.error
      ? "#E14075"
      : props.valid
      ? "#2b2c3a"
      : "#d7daff"};
  border-radius: 6px;
  font-size: 20px;
  color: #d7daff;
  text-align: center;
  width: 100%;
  transition: background-color 150ms ease-in-out;
`;

const CheckMark = styled(FormCheck)`
  position: absolute;
  top: 50%;
  left: 20px;
  width: 22px;
  transform: translateY(-50%);
`;
