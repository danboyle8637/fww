import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";

import { SectionGrid, BackgroundAsset } from "../../../styles/GridContainer";
import KindalHeadline from "./Headlines/KindalHeadline";
import useRenderBackgroundImage from "../../../hooks/useRenderBackgroundImage";
import { above } from "../../../styles/Theme";

const Kindal = () => {
  const query = graphql`
    query {
      kindalMobile: file(
        sourceInstanceName: { eq: "AboutImages" }
        name: { eq: "kindal-600x1300" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 1300, quality: 90) {
            ...GatsbyImageSharpFluid
            aspectRatio
          }
        }
      }
      kindalTablet: file(
        sourceInstanceName: { eq: "AboutImages" }
        name: { eq: "kindal-834x1112" }
      ) {
        childImageSharp {
          fluid(maxWidth: 834, maxHeight: 1112, quality: 90) {
            ...GatsbyImageSharpFluid
            aspectRatio
          }
        }
      }
      kindalLaptop: file(
        sourceInstanceName: { eq: "AboutImages" }
        name: { eq: "kindal-1440x900" }
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
  const mobile = images.kindalMobile;
  const tablet = images.kindalTablet;
  const laptop = images.kindalLaptop;

  const background = useRenderBackgroundImage(mobile, tablet, laptop);

  return (
    <SectionGrid>
      <BackgroundAsset>
        <Image fluid={background} />
      </BackgroundAsset>
      <ContentWrapper>
        <KindalHeadline />
      </ContentWrapper>
    </SectionGrid>
  );
};

export default Kindal;

const ContentWrapper = styled.div`
  margin: 160px 0 0 20px;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  z-index: 1;
  ${above.mobile`
    margin: 120px 0 0 60px;
  `}
  ${above.tablet`
    margin: 200px 0 0 80px;
    width: 30%;
  `}
`;
