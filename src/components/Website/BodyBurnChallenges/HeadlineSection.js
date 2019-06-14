import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";

import { SectionGrid, BackgroundAsset } from "../../../styles/GridContainer";
import useRenderBackgroundImage from "../../../hooks/useRenderBackgroundImage";
import BBCLogo from "../../../svgs/BodyBurnChallengesLogo";
import HeadlineCopy from "./Copy/HeadlineCopy";

const HeadlineSection = () => {
  const query = graphql`
    query {
      bbcMobile: file(
        sourceInstanceName: { eq: "HomeImages" }
        name: { eq: "mobile-600x1300" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 1300, quality: 90) {
            ...GatsbyImageSharpFluid
            aspectRatio
          }
        }
      }
      bbcTablet: file(
        sourceInstanceName: { eq: "HomeImages" }
        name: { eq: "tablet-834x1112" }
      ) {
        childImageSharp {
          fluid(maxWidth: 834, maxHeight: 1112, quality: 90) {
            ...GatsbyImageSharpFluid
            aspectRatio
          }
        }
      }
      bbcLaptop: file(
        sourceInstanceName: { eq: "HomeImages" }
        name: { eq: "desktop-1440x900" }
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
  const mobile = images.bbcMobile;
  const tablet = images.bbcTablet;
  const laptop = images.bbcLaptop;

  const background = useRenderBackgroundImage(mobile, tablet, laptop);

  return (
    <SectionGrid>
      <BackgroundAsset>
        <Image fluid={background} />
      </BackgroundAsset>
      <ContentWrapper>
        <Logo />
        <HeadlineCopy />
      </ContentWrapper>
    </SectionGrid>
  );
};

export default HeadlineSection;

const ContentWrapper = styled.div`
  padding: 90px 16px 0 16px;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  width: 100%;
  z-index: 1;
`;

const Logo = styled(BBCLogo)`
  width: 100%;
`;
