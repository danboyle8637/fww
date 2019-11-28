import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";

import { SectionGrid, BackgroundAsset } from "../../../../styles/GridContainer";
import IgniteLogo from "../../../../svgs/IgniteLogo";
import IgniteCopy from "./Copy/IgniteCopy";
import useRenderBackgroundImage from "../../../../hooks/useRenderBackgroundImage";
import useIsBackgroundReady from "../../../../hooks/useIsBackgroundReady";
import BackgroundImageLoader from "../../../Shared/BackgroundImageLoader";
import { above } from "../../../../styles/Theme";

const IgniteSection = () => {
  const query = graphql`
    query {
      igniteMobile: file(
        sourceInstanceName: { eq: "WhatWeDoImages" }
        name: { eq: "ignite-crab-touch-600x1300" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 1300, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      igniteTablet: file(
        sourceInstanceName: { eq: "WhatWeDoImages" }
        name: { eq: "ignite-crab-touch-834x1112" }
      ) {
        childImageSharp {
          fluid(maxWidth: 834, maxHeight: 1112, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      igniteIpadPro: file(
        sourceInstanceName: { eq: "WhatWeDoImages" }
        name: { eq: "ignite-crab-touch-1024x1112" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1024, maxHeight: 1112, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      igniteLaptop: file(
        sourceInstanceName: { eq: "WhatWeDoImages" }
        name: { eq: "ignite-crab-touch-1440x900" }
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
  const mobile = images.igniteMobile;
  const tablet = images.igniteTablet;
  const ipadPro = images.igniteIpadPro;
  const laptop = images.igniteLaptop;

  const background = useRenderBackgroundImage(mobile, tablet, ipadPro, laptop);
  const backgroundReady = useIsBackgroundReady(background);

  return (
    <SectionGrid>
      <TopLine />
      <BackgroundAsset>
        {backgroundReady ? (
          <Image
            fluid={background}
            alt="Kindal doing a crab tripod exercise"
            title="Kindal doing a crab tripod exercise"
          />
        ) : (
          <BackgroundImageLoader />
        )}
      </BackgroundAsset>
      <ContentWrapper>
        <Logo />
        <IgniteCopy />
      </ContentWrapper>
    </SectionGrid>
  );
};

export default IgniteSection;

const Logo = styled(IgniteLogo)`
  width: 100%;
`;

const ContentWrapper = styled.div`
  margin: 40px 0 0 16px;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 90%;
  z-index: 1;
  ${above.mobile`
    margin: 140px 0 0 80px;
    width: 70%;
  `}
  ${above.tablet`
    margin: 140px 0 0 60px;
    width: 60%;
  `}
  ${above.ipadPro`
    margin: 140px 0 0 140px;
    width: 40%;
  `}
`;

const TopLine = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 16px;
  background: rgba(43, 44, 58, 0.5);
  z-index: 3;
`;
