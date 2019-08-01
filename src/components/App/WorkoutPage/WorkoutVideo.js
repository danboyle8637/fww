import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

import PlayButtonIcon from "../../../svgs/PlayButtonIcon";
import WorkoutLabel from "./WorkoutLabel";

const WorkoutVideo = () => {
  const query = graphql`
    query {
      workoutBackground: file(
        sourceInstanceName: { eq: "AppImages" }
        name: { eq: "bbc-reset-pushup-workout-bg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1200, maxHeight: 480, quality: 90) {
            ...GatsbyImageSharpFluid
            aspectRatio
          }
        }
      }
    }
  `;

  const image = useStaticQuery(query);
  const background = image.workoutBackground.childImageSharp.fluid;

  const handleShowVideo = () => {
    console.log("Trigger Workout Video Blow Up!");
  };

  return (
    <SectionGrid>
      <WorkoutBackground fluid={background} />
      <ContentWrapper onClick={handleShowVideo}>
        <PlayButton />
      </ContentWrapper>
      <WorkoutLabel>Workout Video</WorkoutLabel>
    </SectionGrid>
  );
};

export default WorkoutVideo;

const SectionGrid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  width: 100%;
  border-bottom: ${props =>
    `6px solid ${props.theme.mainBackgroundBorderColor}`};
`;

const ContentWrapper = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

const WorkoutBackground = styled(Image)`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
`;

const PlayButton = styled(PlayButtonIcon)`
  width: 60px;
`;
