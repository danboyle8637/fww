import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

import { SectionGrid, BackgroundAsset } from "../../../styles/GridContainer";
import useRenderBackgroundImage from "../../../hooks/useRenderBackgroundImage";
import DividerMarkerTriangle from "../../../svgs/DividerMarkerTriangle";
import Headline3 from "./Headlines/Headline3";
import { above } from "../../../styles/Theme";

const WorkoutsPictureSection = () => {
  const query = graphql`
    query {
      bbcWorkoutMobile: file(
        sourceInstanceName: { eq: "HomeImages" }
        name: { regex: "/mobile/" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 1300, quality: 90) {
            ...GatsbyImageSharpFluid
            aspectRatio
          }
        }
      }
      bbcWorkoutTablet: file(
        sourceInstanceName: { eq: "HomeImages" }
        name: { regex: "/tablet/" }
      ) {
        childImageSharp {
          fluid(maxWidth: 834, maxHeight: 1112, quality: 90) {
            ...GatsbyImageSharpFluid
            aspectRatio
          }
        }
      }
      bbcWorkoutLaptop: file(
        sourceInstanceName: { eq: "HomeImages" }
        name: { regex: "/desktop/" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1440, maxHeight: 900, quality: 90) {
            ...GatsbyImageSharpFluid
            aspectRatio
          }
        }
      }
    }
  `;

  const images = useStaticQuery(query);
  const mobile = images.bbcWorkoutMobile;
  const tablet = images.bbcWorkoutTablet;
  const laptop = images.bbcWorkoutLaptop;

  const background = useRenderBackgroundImage(mobile, tablet, laptop);

  return (
    <SectionGrid>
      <TopDivider />
      <BackgroundAsset>
        <Image fluid={background} />
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
  z-index: 1;
  ${above.tablet`
    margin: 80px 0 0 280px;
  `}
`;

const TopDivider = styled(DividerMarkerTriangle)`
  position: absolute;
  top: 0;
  left: 0;
  width: 180%;
  z-index: 1;
  transform: translate(-20px, -35px) rotateY(180deg) rotateZ(6deg);
  ${above.mobile`
    width: 100%;
    transform: translateY(-35px) rotateY(180deg);
  `}
  ${above.tablet`
    transform: translateY(-85px) rotateY(180deg);
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
    transform: translateY(45px) rotate(-180deg) rotateY(180deg);
  `}
  ${above.tablet`
    width: 100%;
    transform: translateY(100px) rotate(-180deg) rotateY(180deg);
  `}
`;
