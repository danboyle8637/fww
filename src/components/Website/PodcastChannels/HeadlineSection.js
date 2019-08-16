import React from "react";
import styled from "styled-components";

import { SectionContainer, ContentContainer } from "../../../styles/Containers";
import PodcastMicrophone from "../../../svgs/PodcastMicrophone";

const HeadlineSection = () => {
  return (
    <SectionContainer>
      <ContentContainer>
        <PodcastIcon />
      </ContentContainer>
    </SectionContainer>
  );
};

export default HeadlineSection;

const PodcastIcon = styled(PodcastMicrophone)`
  width: 60px;
`;
