import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

import PlayButtonIcon from "../../../svgs/PlayButtonIcon";
import WorkoutLabel from "./WorkoutLabel";
import { above } from "../../../styles/Theme";

const WarmCoolVideos = () => {
  const query = graphql`
    query {
      warmUpBackground: file(
        sourceInstanceName: { eq: "AppImages" }
        name: { eq: "test-warm-up1" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 376, quality: 90) {
            ...GatsbyImageSharpFluid
            aspectRatio
          }
        }
      }
      coolDownBackground: file(
        sourceInstanceName: { eq: "AppImages" }
        name: { eq: "test-cool-down1" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 376, quality: 90) {
            ...GatsbyImageSharpFluid
            aspectRatio
          }
        }
      }
    }
  `;

  const images = useStaticQuery(query);
  const warmUp = images.warmUpBackground.childImageSharp.fluid;
  const coolDown = images.coolDownBackground.childImageSharp.fluid;

  const handleShowVideo = () => {
    console.log("Trigger Warm Up or Cool Down Video Blow Up!");
  };

  return (
    <VideoContainer>
      <SectionGrid borderRight>
        <WorkoutBackground fluid={warmUp} />
        <ContentWrapper onClick={handleShowVideo}>
          <PlayButton />
        </ContentWrapper>
        <WorkoutLabel>Warm Up</WorkoutLabel>
      </SectionGrid>
      <SectionGrid borderLeft>
        <WorkoutBackground fluid={coolDown} />
        <ContentWrapper onClick={handleShowVideo}>
          <PlayButton />
        </ContentWrapper>
        <WorkoutLabel>Cool Down</WorkoutLabel>
      </SectionGrid>
    </VideoContainer>
  );
};

export default WarmCoolVideos;

const VideoContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const SectionGrid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  width: 100%;
  border-left: ${props =>
    props.borderLeft && `3px solid ${props.theme.mainBackgroundBorderColor}`};
  border-right: ${props =>
    props.borderRight && `3px solid ${props.theme.mainBackgroundBorderColor}`};
  ${above.tablet`
    border-left: ${props =>
      props.borderLeft && `4px solid ${props.theme.mainBackgroundBorderColor}`};
    border-right: ${props =>
      props.borderRight &&
      `4px solid ${props.theme.mainBackgroundBorderColor}`};
    `}
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
  width: 34px;
  ${above.mobile`
    width: 46px;
  `}
  ${above.tablet`
    width: 56px;
  `}
  ${above.ipadPro`
    width: 66px;
  `}
`;
