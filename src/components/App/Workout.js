import React from "react";

import { SectionContainer, ContentContainer } from "../../styles/Containers";
import { BodyText } from "../../styles/BodyText";

const Workout = ({ programName, workoutId }) => {
  return (
    <SectionContainer>
      <ContentContainer>
        <BodyText>
          Workout Page for {programName} and workout {workoutId}
        </BodyText>
      </ContentContainer>
    </SectionContainer>
  );
};

export default Workout;
