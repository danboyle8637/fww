import React from "react";

import { SectionContainer } from "../../styles/Containers";
import CoachingVideo from "./WorkoutPage/CoachingVideo";
import WorkoutVideo from "./WorkoutPage/WorkoutVideo";
import WarmCoolVideos from "./WorkoutPage/WarmCoolVideos";
import WorkoutTracking from "./WorkoutPage/WorkoutTracking";
import WorkoutHistory from "./WorkoutPage/WorkoutHistory";
import CompleteWorkout from "./WorkoutPage/CompleteWorkout";
import DownloadWorkout from "./WorkoutPage/DownloadWorkout";

const Workout = () => {
  return (
    <SectionContainer>
      <CoachingVideo />
      <WorkoutVideo />
      <WarmCoolVideos />
      <WorkoutTracking />
      <WorkoutHistory />
      <CompleteWorkout />
      <DownloadWorkout />
    </SectionContainer>
  );
};

export default Workout;
