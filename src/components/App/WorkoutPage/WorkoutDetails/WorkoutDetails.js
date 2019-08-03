import React, { useRef } from "react";
import styled from "styled-components";

import VimeoPlayer from "../../Shared/VimeoPlayer";
import { Header1 } from "../../../../styles/Headlines";
import { BodyText } from "../../../../styles/BodyText";
import WorkoutCircuitIcon from "../../../../svgs/WorkoutCircuitIcon";
import Workout from "../../../../content/Firestore/hold-it-1-workout.json";
import { above } from "../../../../styles/Theme";

const WorkoutDetails = () => {
  const videoRef = useRef(null);
  const videoId = "313885495";

  const workoutBreakdown = Workout.circuits.map(circuit => {
    const exercises = circuit.exercises.map((exercise, index) => {
      return <ExerciseNames key={index}>{exercise}</ExerciseNames>;
    });

    return (
      <CircuitWrapper key={circuit.id}>
        <CircuitIcon />
        <CircuitDetails>
          <CircuitDescription>{circuit.directions}</CircuitDescription>
          {exercises}
        </CircuitDetails>
      </CircuitWrapper>
    );
  });

  return (
    <>
      <VimeoPlayer ref={videoRef} videoId={videoId} />
      <WorkoutSectionContainer>
        <Header1 upper mobileMedium primary tabletLarge>
          {Workout.title}
        </Header1>
        <BodyText setMobileMarginTop={20}>{Workout.description}</BodyText>
        <WorkokutContainer>{workoutBreakdown}</WorkokutContainer>
      </WorkoutSectionContainer>
    </>
  );
};

export default WorkoutDetails;

const WorkoutSectionContainer = styled.div`
  margin: 80px 0 0 0;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  ${above.mobile`
    width: 43rem;
  `}
  ${above.tablet`
    width: 53rem;
  `}
`;

const WorkokutContainer = styled.div`
  margin: 40px 0;
`;

const CircuitDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CircuitDescription = styled.h4`
  margin: 0 0 10px 0;
  padding: 0;
  font-size: 18px;
  color: ${props => props.theme.headlineSecondary};
  font-weight: 800;
  line-height: 1.4;
`;

const CircuitWrapper = styled.div`
  margin: 0 0 30px 0;
  padding: 8px;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
  background: ${props => props.theme.mainBackgroundBorderColor};
  border-radius: 6px;
  width: 100%;
  &:last-child {
    margin-bottom: 0;
  }
`;

const CircuitIcon = styled(WorkoutCircuitIcon)`
  width: 40px;
`;

const ExerciseNames = styled.p`
  position: relative;
  margin: 0 0 8px 20px;
  padding: 0;
  font-size: 16px;
  font-weight: 500;
  color: ${props => props.theme.bodyText};
  &::before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    background: ${props =>
      props.accent ? props.theme.secondaryAccent : props.theme.primaryAccent};
    border-radius: 50%;
    width: 8px;
    height: 8px;
    transform: translate(-200%, 120%);
  }
  &:last-child {
    margin-bottom: 0;
  }
`;
