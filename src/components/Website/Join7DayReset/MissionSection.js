import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";

import { SectionGrid, BackgroundAsset } from "../../../styles/GridContainer";
import useRenderBackgroundImage from "../../../hooks/useRenderBackgroundImage";
import useIsBackgroundReady from "../../../hooks/useIsBackgroundReady";
import BackgroundLoaderImage from "../../Shared/BackgroundImageLoader";
import FWWLogo from "../../../svgs/FWWLogo";
import DividerMarker1 from "../../../svgs/DividerMarker1";
import MissionCopy from "./Copy/MissionCopy";
import { above } from "../../../styles/Theme";

const MissionSection = () => {
  const query = graphql`
    query {
      missionMobile: file(
        sourceInstanceName: { eq: "7DayResetImages" }
        name: { eq: "7-day-reset-kindal-flex-600x1300" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 1300, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      missionTablet: file(
        sourceInstanceName: { eq: "7DayResetImages" }
        name: { eq: "7-day-reset-kindal-flex-834x1112" }
      ) {
        childImageSharp {
          fluid(maxWidth: 834, maxHeight: 1112, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      missionIpadPro: file(
        sourceInstanceName: { eq: "7DayResetImages" }
        name: { eq: "7-day-reset-kindal-flex-1024x1112" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1024, maxHeight: 1112, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      missionLaptop: file(
        sourceInstanceName: { eq: "7DayResetImages" }
        name: { eq: "7-day-reset-kindal-flex-1440x900" }
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
  const mobile = images.missionMobile;
  const tablet = images.missionTablet;
  const ipadPro = images.missionIpadPro;
  const laptop = images.missionLaptop;

  const background = useRenderBackgroundImage(mobile, tablet, ipadPro, laptop);
  const backgroundReady = useIsBackgroundReady(background);

  return (
    <SectionGrid>
      <TopDividerMarker />
      <BackgroundAsset>
        {backgroundReady ? (
          <Image
            fluid={background}
            alt="Kindal flexing looking strong and incontrol of her body."
            title="Kindal flexing looking strong."
          />
        ) : (
          <BackgroundLoaderImage />
        )}
      </BackgroundAsset>
      <ContentWrapper>
        <Logo />
        <MissionCopy />
      </ContentWrapper>
      <BottomDividerMarker />
    </SectionGrid>
  );
};

export default MissionSection;

const ContentWrapper = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  margin: 120px 0 0 0;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  ${above.mobile`
    margin: 200px 0 0 0;
    align-self: start;
    width: 54%;
  `}
  ${above.tablet`
    margin: 200px 0 0 40px;
    width: 50%;
  `}
  ${above.ipadPro`
    margin: 200px 0 0 180px;
    width: 40%;
  `}
`;

const Logo = styled(FWWLogo)`
  width: 100px;
  ${above.mobile`
    width: 160px;
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
