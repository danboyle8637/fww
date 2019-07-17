import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

import { SectionGrid, BackgroundAsset } from "../../../styles/GridContainer";
import { ElementContainer } from "../../../styles/Containers";
import useRenderBackgroundImage from "../../../hooks/useRenderBackgroundImage";
import useIsBackgroundReady from "../../../hooks/useIsBackgroundReady";
import BackgroundImageLoader from "../../Shared/BackgroundImageLoader";
import DividerMarkerTriangle from "../../../svgs/DividerMarkerTriangle";
import { InnerButton } from "../../../styles/Buttons";
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
            aspectRatio
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
            aspectRatio
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

  const background = useRenderBackgroundImage(mobile, tablet, laptop, laptop);
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
        <ElementContainer column alignCenter>
          <InnerButton to={"/"}>Join the BBC 7 Day Reset!</InnerButton>
        </ElementContainer>
      </ContentWrapper>
      <BottomDivider />
    </SectionGrid>
  );
};

export default PictureMiddleSection;

const ContentWrapper = styled.div`
  margin: 0 0 80px 0;
  padding: 0 16px;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  z-index: 2;
`;

const TopDivider = styled(DividerMarkerTriangle)`
  position: absolute;
  top: 0;
  left: 0;
  width: 180%;
  z-index: 2;
  transform: translate(-20px, -15px) rotate(4deg);
  ${above.mobile`
    width: 100%;
    transform: translateY(-45px);
  `}
  ${above.tablet`
    width: 100%;
    transform: translateY(-95px);
  `}
`;

const BottomDivider = styled(DividerMarkerTriangle)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 180%;
  z-index: 1;
  transform: translateY(15px) rotate(-180deg);
  ${above.mobile`
    width: 100%;
    transform: translateY(45px) rotate(-180deg);
  `}
  ${above.tablet`
    width: 100%;
    transform: translateY(95px) rotate(-180deg);
  `}
`;
