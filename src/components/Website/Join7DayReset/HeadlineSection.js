import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";

import { SectionGrid, BackgroundAsset } from "../../../styles/GridContainer";
import OutsideButton from "../../Buttons/OutsideButton";
import Headline1 from "./Headlines/Headline1";
import useRenderBackgroundImage from "../../../hooks/useRenderBackgroundImage";
import useIsBackgroundReady from "../../../hooks/useIsBackgroundReady";
import BackgroundLoaderImage from "../../Shared/BackgroundImageLoader";
import { above } from "../../../styles/Theme";

const HeadlineSection = () => {
  const query = graphql`
    query {
      resetMobile: file(
        sourceInstanceName: { eq: "7DayResetImages" }
        name: { eq: "7-day-reset-squat-600x1300" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 1300, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      resetTablet: file(
        sourceInstanceName: { eq: "7DayResetImages" }
        name: { eq: "7-day-reset-squat-834x1112" }
      ) {
        childImageSharp {
          fluid(maxWidth: 834, maxHeight: 1112, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      resetIpadPro: file(
        sourceInstanceName: { eq: "7DayResetImages" }
        name: { eq: "7-day-reset-squat-1024x1112" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1024, maxHeight: 1112, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      resetLaptop: file(
        sourceInstanceName: { eq: "7DayResetImages" }
        name: { eq: "7-day-reset-squat-1440x900" }
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
  const mobile = images.resetMobile;
  const tablet = images.resetTablet;
  const ipadPro = images.resetIpadPro;
  const laptop = images.resetLaptop;

  const background = useRenderBackgroundImage(mobile, tablet, ipadPro, laptop);
  const backgroundReady = useIsBackgroundReady(background);

  return (
    <SectionGrid>
      <BackgroundAsset>
        {backgroundReady ? (
          <Image
            fluid={background}
            alt="Kindal doing a bodyweight squat with good form."
            title="Bodyweight squat with good form."
          />
        ) : (
          <BackgroundLoaderImage />
        )}
      </BackgroundAsset>
      <HeadlineWrapper>
        <Headline1 />
      </HeadlineWrapper>
      <ButtonWrapper>
        <OutsideButton linkLocation={"https://google.com"}>
          Join a Reset Program for FREE!
        </OutsideButton>
      </ButtonWrapper>
      <BottomLine />
    </SectionGrid>
  );
};

export default HeadlineSection;

const HeadlineWrapper = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  margin: 80px 0 0 0;
  padding: 0 16px;
  align-self: start;
  z-index: 1;
  ${above.mobile`
    margin: 220px 0 0 70px;
  `}
  ${above.tablet`
    margin: 220px 0 0 180px;
  `}
  ${above.ipadPro`
    margin: 180px 0 0 340px;
  `}
`;

const ButtonWrapper = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  align-self: end;
  margin: 0 0 20px 0;
  padding: 0 16px;
  display: flex;
  justify-content: center;
  z-index: 1;
  ${above.mobile`
    margin: 0 0 60px 0;
  `}
`;

const BottomLine = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 8px;
  background: rgba(43, 44, 58, 0.5);
  z-index: 3;
`;
