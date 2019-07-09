import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

import PlayButtonIcon from "../../../svgs/PlayButtonIcon";

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

  return (
    <VideoContainer>
      <SectionGrid>
        <WorkoutBackground fluid={warmUp} />
        <ContentWrapper>
          <PlayButton />
        </ContentWrapper>
      </SectionGrid>
      <SectionGrid>
        <WorkoutBackground fluid={coolDown} />
        <ContentWrapper>
          <PlayButton />
        </ContentWrapper>
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
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  width: 100%;
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
`;
