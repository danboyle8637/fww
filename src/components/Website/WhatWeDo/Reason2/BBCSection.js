import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";

import { SectionGrid, BackgroundAsset } from "../../../../styles/GridContainer";
import BBCLogo from "../../../../svgs/BodyBurnChallengesLogo";
import BBCCopy from "./Copy/BBCCopy";
import useRenderBackgroundImage from "../../../../hooks/useRenderBackgroundImage";
import useIsBackgroundReady from "../../../../hooks/useIsBackgroundReady";
import BackgroundImageLoader from "../../../Shared/BackgroundImageLoader";
import { above } from "../../../../styles/Theme";

const BBCSection = () => {
  const query = graphql`
    query {
      bbcMobile: file(
        sourceInstanceName: { eq: "WhatWeDoImages" }
        name: { eq: "bbc-hard-pushup-600x1300" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 1300, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bbcTablet: file(
        sourceInstanceName: { eq: "WhatWeDoImages" }
        name: { eq: "bbc-hard-pushup-834x1112" }
      ) {
        childImageSharp {
          fluid(maxWidth: 834, maxHeight: 1112, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bbcIpadPro: file(
        sourceInstanceName: { eq: "WhatWeDoImages" }
        name: { eq: "bbc-hard-pushup-1024x1112" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1024, maxHeight: 1112, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bbcLaptop: file(
        sourceInstanceName: { eq: "WhatWeDoImages" }
        name: { eq: "bbc-hard-pushup-1440x900" }
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
  const mobile = images.bbcMobile;
  const tablet = images.bbcTablet;
  const ipadPro = images.bbcIpadPro;
  const laptop = images.bbcLaptop;

  const background = useRenderBackgroundImage(mobile, tablet, ipadPro, laptop);
  const backgroundReady = useIsBackgroundReady(background);

  return (
    <SectionGrid>
      <BackgroundAsset>
        {backgroundReady ? (
          <Image
            fluid={background}
            alt="Kindal going hardcore while doing a pushup"
            title="Kindal going hardcore while doing a pushup"
          />
        ) : (
          <BackgroundImageLoader />
        )}
      </BackgroundAsset>
      <ContentWrapper>
        <Logo />
        <BBCCopy />
      </ContentWrapper>
    </SectionGrid>
  );
};

export default BBCSection;

const Logo = styled(BBCLogo)`
  width: 100%;
`;

const ContentWrapper = styled.div`
  margin: 80px 0 0 0;
  padding: 0 16px;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  z-index: 1;
  ${above.mobile`
    margin: 160px 0 0 40px;
    width: 80%;
  `}
  ${above.tablet`
    margin: 240px 0 0 80px;
    width: 80%;
  `}
  ${above.ipadPro`
    margin: 120px 0 0 40px;
    width: 56%;
  `}
`;
