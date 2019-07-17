import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";

import { SectionGrid, BackgroundAsset } from "../../../styles/GridContainer";
import useRenderBackgroundImage from "../../../hooks/useRenderBackgroundImage";
import useIsBackgroundReady from "../../../hooks/useIsBackgroundReady";
import BackgroundImageLoader from "../../Shared/BackgroundImageLoader";
import BBCLogo from "../../../svgs/BodyBurnChallengesLogo";
import HeadlineCopy from "./Copy/HeadlineCopy";
import ScrollDownArrow from "../../Shared/ScrollDownArrow";
import { above } from "../../../styles/Theme";

const HeadlineSection = () => {
  const query = graphql`
    query {
      bbcMobile: file(
        sourceInstanceName: { eq: "ProgramImages" }
        name: { eq: "bbc-beast-squat-600x1300" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 1300, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bbcTablet: file(
        sourceInstanceName: { eq: "ProgramImages" }
        name: { eq: "bbc-beast-squat-834x1112" }
      ) {
        childImageSharp {
          fluid(maxWidth: 834, maxHeight: 1112, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bbcIpadPro: file(
        sourceInstanceName: { eq: "ProgramImages" }
        name: { eq: "bbc-beast-squat-1024x1112" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1024, maxHeight: 1112, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      bbcLaptop: file(
        sourceInstanceName: { eq: "ProgramImages" }
        name: { eq: "bbc-beast-squat-1440x900" }
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
          <Image fluid={background} />
        ) : (
          <BackgroundImageLoader />
        )}
      </BackgroundAsset>
      <ContentWrapper>
        <Logo />
        <HeadlineCopy />
        <ScrollDownArrow />
      </ContentWrapper>
    </SectionGrid>
  );
};

export default HeadlineSection;

const ContentWrapper = styled.div`
  padding: 90px 16px 0 16px;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  z-index: 1;
  ${above.mobile`
    margin: 100px 0 0 16px;
    padding: 0;
    width: 70%;
  `}
  ${above.tablet`
    margin: 160px 0 0 100px;
    padding: 0;
    width: 50%;
  `}
`;

const Logo = styled(BBCLogo)`
  width: 100%;
`;
