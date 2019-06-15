import React from "react";

import { SectionContainer, ContentContainer } from "../../../styles/Containers";
import WorkoutsCopy from "./Copy/WorkoutsCopy";

const WorkoutsSection = () => {
  return (
    <SectionContainer>
      <ContentContainer>
        <WorkoutsCopy />
      </ContentContainer>
    </SectionContainer>
  );
};

export default WorkoutsSection;
