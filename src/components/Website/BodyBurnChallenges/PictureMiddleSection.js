import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

import { SectionGrid, BackgroundAsset } from "../../../styles/GridContainer";
import useRenderBackgroundImage from "../../../hooks/useRenderBackgroundImage";
import useIsBackgroundReady from "../../../hooks/useIsBackgroundReady";
import BackgroundImageLoader from "../../Shared/BackgroundImageLoader";
import DividerMarkerTriangle from "../../../svgs/DividerMarkerTriangle";
import { above } from "../../../styles/Theme";

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
      <TopDivider />
      <BackgroundAsset>
        {backgroundReady ? (
          <Image fluid={background} />
        ) : (
          <BackgroundImageLoader />
        )}
      </BackgroundAsset>
      <BottomDivider />
    </SectionGrid>
  );
};

export default PictureMiddleSection;

const TopDivider = styled(DividerMarkerTriangle)`
  position: absolute;
  top: 0;
  left: 0;
  width: 180%;
  z-index: 2;
  transform: translate(-20px, -25px) rotate(4deg);
  ${above.mobile`
    width: 160%;
    transform: translateY(-85px);
  `}
  ${above.tablet`
    width: 100%;
    transform: translateY(-65px);
  `}
  ${above.ipadPro`
    transform: translateY(-105px);
  `}
`;

const BottomDivider = styled(DividerMarkerTriangle)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 180%;
  z-index: 1;
  transform: translateY(65px) rotate(-180deg);
  ${above.mobile`
    width: 160%;
    transform: translateY(105px) rotate(-180deg);
  `}
  ${above.tablet`
    width: 100%;
    transform: translateY(75px) rotate(-180deg);
  `}
  ${above.ipadPro`
    transform: translateY(105px) rotate(-180deg);
  `}
`;
