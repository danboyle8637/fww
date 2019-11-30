import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

import { SectionGrid, BackgroundAsset } from "../../../styles/GridContainer";
import useRenderBackgroundImage from "../../../hooks/useRenderBackgroundImage";
import useIsBackgroundReady from "../../../hooks/useIsBackgroundReady";
import BackgroundImageLoader from "../../Shared/BackgroundImageLoader";

const PictureMiddleSection = () => {
  const query = graphql`
    query {
      bbcWorkoutMobile: file(
        sourceInstanceName: { eq: "ProgramImages" }
        name: { eq: "bbc-split-squat-600x1300" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 1300, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bbcWorkoutTablet: file(
        sourceInstanceName: { eq: "ProgramImages" }
        name: { eq: "bbc-split-squat-834x1112" }
      ) {
        childImageSharp {
          fluid(maxWidth: 834, maxHeight: 1112, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bbcWorkoutIpadPro: file(
        sourceInstanceName: { eq: "ProgramImages" }
        name: { eq: "bbc-split-squat-1024x1024" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1024, maxHeight: 1024, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bbcWorkoutLaptop: file(
        sourceInstanceName: { eq: "ProgramImages" }
        name: { eq: "bbc-split-squat-1440x900" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1440, maxHeight: 900, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `;

  const images = useStaticQuery(query);
  const mobile = images.bbcWorkoutMobile;
  const tablet = images.bbcWorkoutTablet;
  const ipadPro = images.bbcWorkoutIpadPro;
  const laptop = images.bbcWorkoutLaptop;

  const background = useRenderBackgroundImage(mobile, tablet, ipadPro, laptop);
  const backgroundReady = useIsBackgroundReady(background);

  return (
    <SectionGrid>
      <TopLine />
      <BackgroundAsset>
        {backgroundReady ? (
          <Image
            fluid={background}
            alt="Kindal doing a bodyweight split squat from a box."
            title="Bodyweight split squat."
          />
        ) : (
          <BackgroundImageLoader />
        )}
      </BackgroundAsset>
      <BottomLine />
    </SectionGrid>
  );
};

export default PictureMiddleSection;

const TopLine = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 16px;
  background: rgba(43, 44, 58, 0.5);
  z-index: 3;
`;

const BottomLine = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 16px;
  background: rgba(43, 44, 58, 0.5);
  z-index: 3;
`;
