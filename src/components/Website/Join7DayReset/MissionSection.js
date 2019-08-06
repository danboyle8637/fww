import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";

import { SectionGrid, BackgroundAsset } from "../../../styles/GridContainer";
import useRenderBackgroundImage from "../../../hooks/useRenderBackgroundImage";
import useIsBackgroundReady from "../../../hooks/useIsBackgroundReady";
import BackgroundLoaderImage from "../../Shared/BackgroundImageLoader";
import FWWLogo from "../../../svgs/FWWLogo";
import DividerMarker1 from '../../../svgs/DividerMarker1'
import MissionCopy from "./Copy/MissionCopy";

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
      <BackgroundAsset>
        {backgroundReady ? (
          <Image fluid={background} />
        ) : (
          <BackgroundLoaderImage />
        )}
      </BackgroundAsset>
      <ContentWrapper>
        <Logo />
        <MissionCopy />
      </ContentWrapper>
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
`;

const Logo = styled(FWWLogo)`
  width: 100px;
`;

const TopDividerMarker = styled(DividerMarker1)``

const BottomDividerMarker = styled(DividerMarker1)``
