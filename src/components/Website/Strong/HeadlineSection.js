import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";

import { SectionGrid, BackgroundAsset } from "../../../styles/GridContainer";
import useRenderBackgroundImage from "../../../hooks/useRenderBackgroundImage";
import useIsBackgroundReady from "../../../hooks/useIsBackgroundReady";
import BackgroundImageLoader from "../../Shared/BackgroundImageLoader";
import StrongLogo from "../../../svgs/StrongLogo";
import HeadlineCopy from "./Copy/HeadlineCopy";
import ScrollDownArrow from "../../Shared/ScrollDownArrow";
import { above } from "../../../styles/Theme";

const HeadlineSection = () => {
  const query = graphql`
    query {
      strongMobile: file(
        sourceInstanceName: { eq: "ProgramImages" }
        name: { eq: "strong-half-getup-600x1300" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 1300, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      strongTablet: file(
        sourceInstanceName: { eq: "ProgramImages" }
        name: { eq: "strong-half-getup-834x1112" }
      ) {
        childImageSharp {
          fluid(maxWidth: 834, maxHeight: 1112, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      strongIpadPro: file(
        sourceInstanceName: { eq: "ProgramImages" }
        name: { eq: "strong-half-getup-1024x1112" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1024, maxHeight: 1112, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      strongLaptop: file(
        sourceInstanceName: { eq: "ProgramImages" }
        name: { eq: "strong-half-getup-1440x900" }
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
  const mobile = images.strongMobile;
  const tablet = images.strongTablet;
  const ipadPro = images.strongIpadPro;
  const laptop = images.strongLaptop;

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
        <ScrollDownArrow scrollId={"strong-program-lead"} />
      </ContentWrapper>
    </SectionGrid>
  );
};

export default HeadlineSection;

const ContentWrapper = styled.div`
  padding: 50px 16px 0 16px;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  z-index: 1;
  ${above.mobile`
    margin: 160px 0 0 16px;
    padding: 0;
    width: 60%;
  `}
  ${above.tablet`
    margin: 160px 0 0 100px;
    padding: 0;
    width: 40%;
  `}
`;

const Logo = styled(StrongLogo)`
  width: 100%;
`;
