import React from "react";
import styled from "styled-components";

import TextInput from "../Shared/Forms/TextInput";
import { useFormStore } from "../../../context/FormContext";
import useContactFormControls from "../../../hooks/useContactFormControls";

const WorkoutTrackingForm = () => {
  // eslint-disable-next-line
  const [formState, dispatch] = useFormStore();
  const { updateFormValue, updateFormOptions } = useContactFormControls();

  return (
    <TrackingForm>
      <TextInput
        type="text"
        name="workoutGoal"
        labelName="Only enter numbers"
        labelFor="workoutGoal"
        labelInstructions="..."
        labelError="Remember ONLY numbers!"
        value={formState.workoutGoalValue.value}
        valid={formState.workoutGoalValue.valid}
        initial={formState.workoutGoalOptions.initial}
        touched={formState.workoutGoalOptions.touched}
        showInstructions={formState.workoutGoalOptions.showInstructions}
        onChange={updateFormValue}
        onFocus={updateFormOptions}
        onBlur={updateFormOptions}
      />
      <PostButton>Post</PostButton>
    </TrackingForm>
  );
};

export default WorkoutTrackingForm;

const TrackingForm = styled.form`
  margin: 14px 0 0 0;
  padding: 0;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  column-gap: 10px;
  width: 100%;
`;

const PostButton = styled.button`
  margin: 0;
  padding: 12px 12px;
  background: ${props =>
    props.kettlebell ? props.theme.tertiaryAccent : props.theme.primaryAccent};
  border: 2px solid ${props => props.theme.primaryAccent};
  border-radius: 6px;
  text-decoration: none;
  text-align: center;
  color: ${props => props.theme.mainBackgroundColor};
  font-family: Montserrat, sans-serif;
  text-transform: uppercase;
  font-weight: 800;
  width: 100%;
  max-width: 600px;
  cursor: pointer;
`;
