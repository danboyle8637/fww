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
        sourceInstanceName: { eq: "ProgramImages" }
        name: { eq: "ignite-box-pushup-600x1300" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 1300, quality: 90) {
            ...GatsbyImageSharpFluid
            aspectRatio
          }
        }
      }
      igniteTablet: file(
        sourceInstanceName: { eq: "ProgramImages" }
        name: { eq: "ignite-box-pushup-834x1112" }
      ) {
        childImageSharp {
          fluid(maxWidth: 834, maxHeight: 1112, quality: 90) {
            ...GatsbyImageSharpFluid
            aspectRatio
          }
        }
      }
      igniteLaptop: file(
        sourceInstanceName: { eq: "ProgramImages" }
        name: { eq: "ignite-box-pushup-1440x900" }
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
  padding: 20px 0 0 16px;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80%;
  z-index: 1;
  ${above.mobile`
    margin: 60px 0 0 60px;
    padding: 0;
    width: 46%;
  `}
  ${above.tablet`
    margin: 120px 0 0 100px;
    padding: 0;
    width: 40%;
  `}
`;

const Logo = styled(IgniteLogo)`
  width: 80%;
  ${above.mobile`
    width: 100%;
  `}
  ${above.tablet`
    width: 80%;
  `}
`;
