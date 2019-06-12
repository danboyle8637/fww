import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import {
  SectionContainer,
  ContentContainer,
} from "../../../../styles/Containers";
import WorkoutTimerCard from "./WorkoutTimerCard";

const TimerSection = () => (
  <SectionContainer>
    <ContentContainer>
      <WorkoutTimerCard />
    </ContentContainer>
  </SectionContainer>
);

export default TimerSection;
