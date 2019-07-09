import React from "react";

import { SectionContainer } from "../../styles/Containers";
import CoachingVideo from "./WorkoutPage/CoachingVideo";
import WorkoutVideo from "./WorkoutPage/WorkoutVideo";
import WarmCoolVideos from "./WorkoutPage/WarmCoolVideos";

const Workout = () => {
  return (
    <SectionContainer>
      <CoachingVideo />
      <WorkoutVideo />
      <WarmCoolVideos />
    </SectionContainer>
  );
};

export default Workout;
