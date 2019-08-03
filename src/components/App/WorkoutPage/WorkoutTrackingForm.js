import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { TweenMax } from "gsap/TweenMax";

import TextInput from "../../Shared/Form/TextInput";
import { useFormStore } from "../../../context/FormContext";
import useContactFormControls from "../../../hooks/useContactFormControls";
import { above } from "../../../styles/Theme";

const WorkoutTrackingForm = () => {
  // eslint-disable-next-line
  const [formState, dispatch] = useFormStore();
  const { updateFormValue, updateFormOptions } = useContactFormControls();
  const postButtonRef = useRef(null);

  useEffect(() => {
    const postButton = postButtonRef.current;
  }, []);

  return (
    <TrackingForm>
      <TextInput
        type="text"
        name="workoutGoal"
        labelName="Enter here"
        labelFor="workoutGoal"
        labelInstructions="How'd you do?"
        labelError="ONLY numbers!"
        labelSuccess="Post it!"
        value={formState.workoutGoalValue.value}
        valid={formState.workoutGoalValue.valid}
        initial={formState.workoutGoalOptions.initial}
        touched={formState.workoutGoalOptions.touched}
        showInstructions={formState.workoutGoalOptions.showInstructions}
        onChange={updateFormValue}
        onFocus={updateFormOptions}
        onBlur={updateFormOptions}
      />
      <ButtonGrid>
        <PostButton ref={postButtonRef}>Post</PostButton>
        <FakeButton />
      </ButtonGrid>
    </TrackingForm>
  );
};

export default WorkoutTrackingForm;

const TrackingForm = styled.form`
  margin: 14px 0 0 0;
  padding: 0;
  align-self: center;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  column-gap: 10px;
  row-gap: 0;
  width: 100%;
`;

const ButtonGrid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
`;

const PostButton = styled.button`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  margin: 0;
  padding: 12px 12px;
  background: ${props =>
    props.kettlebell ? props.theme.tertiaryAccent : props.theme.primaryAccent};
  border: none;
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
  z-index: 1;
`;

const FakeButton = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  padding: 10px 10px;
  background: ${props =>
    props.kettlebell ? props.theme.tertiaryAccent : props.theme.primaryAccent};
  border-radius: 6px;
  width: 100%;
  max-width: 600px;
`;
