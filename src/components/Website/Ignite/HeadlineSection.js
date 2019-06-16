import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";

import { SectionGrid, BackgroundAsset } from "../../../styles/GridContainer";
import useRenderBackgroundImage from "../../../hooks/useRenderBackgroundImage";
import IgniteLogo from "../../../svgs/IgniteLogo";
import HeadlineCopy from "./Copy/HeadlineCopy";
import ScrollDownArrow from "../../Shared/ScrollDownArrow";
import { above } from "../../../styles/Theme";

const HeadlineSection = () => {
  const query = graphql`
    query {
      igniteMobile: file(
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
      igniteTablet: file(
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
      igniteLaptop: file(
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
  const mobile = images.igniteMobile;
  const tablet = images.igniteTablet;
  const laptop = images.igniteLaptop;

  const background = useRenderBackgroundImage(mobile, tablet, laptop);

  return (
    <SectionGrid>
      <BackgroundAsset>
        <Image fluid={background} />
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
  padding: 90px 0 0 16px;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 70%;
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

const Logo = styled(IgniteLogo)`
  width: 100%;
`;
