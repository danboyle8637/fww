import React from "react";

import { SectionContainer } from "../../styles/Containers";
import CoachingVideo from "./WorkoutPage/CoachingVideo";
import WorkoutVideo from "./WorkoutPage/WorkoutVideo";
import WarmCoolVideos from "./WorkoutPage/WarmCoolVideos";
import WorkoutTracking from "./WorkoutPage/WorkoutTracking";

const Workout = () => {
  return (
    <SectionContainer>
      <CoachingVideo />
      <WorkoutVideo />
      <WarmCoolVideos />
      <WorkoutTracking />
    </SectionContainer>
  );
};

export default Workout;
