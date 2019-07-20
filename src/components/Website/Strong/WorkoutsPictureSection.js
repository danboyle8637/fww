import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

import { SectionGrid, BackgroundAsset } from "../../../styles/GridContainer";
import useRenderBackgroundImage from "../../../hooks/useRenderBackgroundImage";
import useIsBackgroundReady from "../../../hooks/useIsBackgroundReady";
import BackgroundImageLoader from "../../Shared/BackgroundImageLoader";
import DividerMarkerTriangle from "../../../svgs/DividerMarkerTriangle";
import Headline3 from "./Headlines/Headline3";
import { above } from "../../../styles/Theme";

const WorkoutsPictureSection = () => {
  const query = graphql`
    query {
      strongWorkoutMobile: file(
        sourceInstanceName: { eq: "ProgramImages" }
        name: { eq: "strong-invert-press-600x1300" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 1300, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      strongWorkoutTablet: file(
        sourceInstanceName: { eq: "ProgramImages" }
        name: { eq: "strong-invert-press-834x1112" }
      ) {
        childImageSharp {
          fluid(maxWidth: 834, maxHeight: 1112, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      strongWorkoutIpadPro: file(
        sourceInstanceName: { eq: "ProgramImages" }
        name: { eq: "strong-invert-press-1024x1024" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1024, maxHeight: 1024, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      strongWorkoutLaptop: file(
        sourceInstanceName: { eq: "ProgramImages" }
        name: { eq: "strong-invert-press-1440x900" }
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
  const mobile = images.strongWorkoutMobile;
  const tablet = images.strongWorkoutTablet;
  const ipadPro = images.strongWorkoutIpadPro;
  const laptop = images.strongWorkoutLaptop;

  const background = useRenderBackgroundImage(mobile, tablet, ipadPro, laptop);
  const backgroundReady = useIsBackgroundReady(background);

  return (
    <SectionGrid>
      <TopDivider />
      <BackgroundAsset>
        {backgroundReady ? (
          <Image fluid={background} />
        ) : (
          <BackgroundImageLoader />
        )}
      </BackgroundAsset>
      <ContentWrapper>
        <Headline3 />
      </ContentWrapper>
      <BottomDivider />
    </SectionGrid>
  );
};

export default WorkoutsPictureSection;

const ContentWrapper = styled.div`
  margin: 40px 0 0 20px;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  z-index: 2;
  ${above.tablet`
    margin: 80px 0 0 280px;
  `}
`;

const TopDivider = styled(DividerMarkerTriangle)`
  position: absolute;
  top: 0;
  left: 0;
  width: 180%;
  z-index: 2;
  transform: translate(-20px, -55px) rotateY(180deg) rotateZ(6deg);
  ${above.mobile`
    width: 100%;
    transform: translateY(-55px) rotateY(180deg);
  `}
  ${above.tablet`
    transform: translateY(-75px) rotateY(180deg);
  `}
  ${above.ipadPro`
    transform: translateY(-105px) rotateY(180deg);
  `}
`;

const BottomDivider = styled(DividerMarkerTriangle)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 180%;
  z-index: 1;
  transform: translateY(45px) rotate(-180deg) rotateY(180deg);
  ${above.mobile`
    width: 100%;
    transform: translateY(55px) rotate(-180deg) rotateY(180deg);
  `}
  ${above.tablet`
    width: 100%;
    transform: translateY(80px) rotate(-180deg) rotateY(180deg);
  `}
  ${above.ipadPro`
    width: 100%;
    transform: translateY(110px) rotate(-180deg) rotateY(180deg);
  `}
`;
