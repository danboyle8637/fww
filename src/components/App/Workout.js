import React from "react";
import styled from "styled-components";

import CoachingVideo from "./WorkoutPage/CoachingVideo";
import WorkoutVideo from "./WorkoutPage/WorkoutVideo";
import WarmCoolVideos from "./WorkoutPage/WarmCoolVideos";
import WorkoutTracking from "./WorkoutPage/WorkoutTracking";
import WorkoutHistory from "./WorkoutPage/WorkoutHistory";
import CompleteWorkout from "./WorkoutPage/CompleteWorkout";
import DownloadWorkout from "./WorkoutPage/DownloadWorkout";
import { above } from "../../styles/Theme";

const Workout = () => {
  return (
    <WorkoutContainer>
      <CoachingVideo />
      <WorkoutVideo />
      <WarmCoolVideos />
      <WorkoutTrackingWrapper>
        <WorkoutTracking />
        <WorkoutHistory />
      </WorkoutTrackingWrapper>
      <CompleteWorkoutWrapper>
        <CompleteWorkout />
        <DownloadWorkout />
      </CompleteWorkoutWrapper>
    </WorkoutContainer>
  );
};

export default Workout;

const WorkoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${above.ipadPro`
    padding: 0 0 120px 0;
  `}
`;

const WorkoutTrackingWrapper = styled.div`
  margin: 80px 0 0 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 20px;
  ${above.mobile`
    margin: 120px 0 0 0;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  `}
  ${above.tablet`
    max-width: 54rem;
  `}
`;

const CompleteWorkoutWrapper = styled.div`
  margin: 80px 0 0 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 80px;
  ${above.mobile`
    margin: 120px 0 0 0;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 20px;
  `}
  ${above.tablet`
    max-width: 54rem;
  `}
`;
