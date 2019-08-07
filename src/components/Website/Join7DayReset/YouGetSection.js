import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Image from "gatsby-image";

import { SectionGrid, BackgroundAsset } from "../../../styles/GridContainer";
import useRenderBackgroundImage from "../../../hooks/useRenderBackgroundImage";
import useIsBackgroundReady from "../../../hooks/useIsBackgroundReady";
import BackgroundImageLoader from "../../Shared/BackgroundImageLoader";
import Headline4 from "./Headlines/Headline4";
import YouGetBullets from "./YouGetBullets";
import DividerMarker1 from "../../../svgs/DividerMarker1";
import { above } from "../../../styles/Theme";

const YouGetSection = () => {
  const query = graphql`
    query {
      snatchMobile: file(
        sourceInstanceName: { eq: "7DayResetImages" }
        name: { eq: "7-day-reset-kindal-snatching-600x1300" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 1300, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      snatchTablet: file(
        sourceInstanceName: { eq: "7DayResetImages" }
        name: { eq: "7-day-reset-kindal-snatching-834x1112" }
      ) {
        childImageSharp {
          fluid(maxWidth: 834, maxHeight: 1112, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      snatchIpadPro: file(
        sourceInstanceName: { eq: "7DayResetImages" }
        name: { eq: "7-day-reset-kindal-snatching-1024x1112" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1024, maxHeight: 1112, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      snatchLaptop: file(
        sourceInstanceName: { eq: "7DayResetImages" }
        name: { eq: "7-day-reset-kindal-snatching-1440x900" }
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
  const mobile = images.snatchMobile;
  const tablet = images.snatchTablet;
  const ipadPro = images.snatchIpadPro;
  const laptop = images.snatchLaptop;

  const background = useRenderBackgroundImage(mobile, tablet, ipadPro, laptop);
  const backgroundReady = useIsBackgroundReady(background);

  return (
    <SectionGrid>
      <TopDividerMarker />
      <BackgroundAsset>
        {backgroundReady ? (
          <Image fluid={background} />
        ) : (
          <BackgroundImageLoader />
        )}
      </BackgroundAsset>
      <ContentWrapper>
        <Headline4 />
        <YouGetBullets />
      </ContentWrapper>
      <BottomDividerMarker />
    </SectionGrid>
  );
};

export default YouGetSection;

const ContentWrapper = styled.div`
  margin: 80px 0 0 0;
  padding: 0 16px;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  z-index: 1;
  ${above.mobile`
    margin: 170px 0 0 0;
  `}
  ${above.tablet`
    margin: 190px 0 0 120px;
  `}
  ${above.ipadPro`
    margin: 190px 0 0 300px;
  `}
`;

const TopDividerMarker = styled(DividerMarker1)`
  position: absolute;
  top: 0;
  left: 0;
  width: 180%;
  transform: translate(0, -20px);
  z-index: 2;
  ${above.mobile`
    width: 120%;
    transform: translate(0, -40px);
  `}
  ${above.tablet`
    width: 100%;
  `}
  ${above.ipadPro`
    transform: translate(0, -64px);
  `}
`;

const BottomDividerMarker = styled(DividerMarker1)`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 180%;
  transform: translate(0, 30px) rotate(180deg);
  z-index: 2;
  ${above.mobile`
    width: 120%;
    transform: translate(0, 30px) rotate(180deg);
  `}
  ${above.tablet`
    width: 100%;
  `}
  ${above.ipadPro`
    transform: translate(0, 70px) rotate(180deg);
  `}
`;
