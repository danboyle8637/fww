import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";

import { SectionGrid, BackgroundAsset } from "../../../../styles/GridContainer";
import Headline2 from "./Headlines/Headline2";
import useRenderBackgroundImage from "../../../../hooks/useRenderBackgroundImage";
import useIsBackgroundReady from "../../../../hooks/useIsBackgroundReady";
import BackgroundImageLoader from "../../../Shared/BackgroundImageLoader";
import { above } from "../../../../styles/Theme";

const DesignStatementSection = () => {
  const query = graphql`
    query {
      missionMobile: file(
        sourceInstanceName: { eq: "WhatWeDoImages" }
        name: { eq: "kindal-jumping-rope-600x1300" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 1300, quality: 90) {
            ...GatsbyImageSharpFluid
            aspectRatio
          }
        }
      }
      missionTablet: file(
        sourceInstanceName: { eq: "WhatWeDoImages" }
        name: { eq: "kindal-jumping-rope-834x1112" }
      ) {
        childImageSharp {
          fluid(maxWidth: 834, maxHeight: 1112, quality: 90) {
            ...GatsbyImageSharpFluid
            aspectRatio
          }
        }
      }
      missionIpadPro: file(
        sourceInstanceName: { eq: "WhatWeDoImages" }
        name: { eq: "kindal-jumping-rope-1024x1112" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1024, maxHeight: 1112, quality: 90) {
            ...GatsbyImageSharpFluid
            aspectRatio
          }
        }
      }
      missionLaptop: file(
        sourceInstanceName: { eq: "WhatWeDoImages" }
        name: { eq: "kindal-jumping-rope-1440x900" }
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
  const mobile = images.missionMobile;
  const tablet = images.missionTablet;
  const ipadPro = images.missionIpadPro;
  const laptop = images.missionLaptop;

  const background = useRenderBackgroundImage(mobile, tablet, ipadPro, laptop);
  const backgroundReady = useIsBackgroundReady(background);

  return (
    <SectionGrid>
      <TopLine />
      <BackgroundAsset>
        {backgroundReady ? (
          <Image
            fluid={background}
            alt="Kindal jumping rope and looking cool"
            title="Kindal jumping rope and looking cool"
          />
        ) : (
          <BackgroundImageLoader />
        )}
      </BackgroundAsset>
      <HeadlineWrapper>
        <Headline2 />
      </HeadlineWrapper>
      <BottonLine />
    </SectionGrid>
  );
};

export default DesignStatementSection;

const HeadlineWrapper = styled.div`
  padding: 0 0 0 16px;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  z-index: 1;
  ${above.mobile`
    padding: 0 0 0 50px;
  `}
  ${above.tablet`
    padding: 0 16px;
    justify-self: center;
    width: 54rem;
  `}
`;

const TopLine = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 12px;
  background: rgba(43, 44, 58, 0.5);
  z-index: 3;
`;

const BottonLine = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 12px;
  background: rgba(43, 44, 58, 0.5);
  z-index: 3;
`;
