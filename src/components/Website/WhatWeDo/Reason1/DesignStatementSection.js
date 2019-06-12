import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";

import { SectionGrid, BackgroundAsset } from "../../../../styles/GridContainer";
import Headline2 from "./Headlines/Headline2";
import useRenderBackgroundImage from "../../../../hooks/useRenderBackgroundImage";
import { above } from "../../../../styles/Theme";

const DesignStatementSection = () => {
  const query = graphql`
    query {
      mobile: file(
        sourceInstanceName: { eq: "HomeImages" }
        name: { regex: "/mobile/" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 1300, quality: 90) {
            ...GatsbyImageSharpFluid
            aspectRatio
          }
        }
      }
      tablet: file(
        sourceInstanceName: { eq: "HomeImages" }
        name: { regex: "/tablet/" }
      ) {
        childImageSharp {
          fluid(maxWidth: 834, maxHeight: 1112, quality: 90) {
            ...GatsbyImageSharpFluid
            aspectRatio
          }
        }
      }
      desktop: file(
        sourceInstanceName: { eq: "HomeImages" }
        name: { regex: "/desktop/" }
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
  const mobileImage = images.mobile;
  const tabletImage = images.tablet;
  const desktopImage = images.desktop;

  const backgroundImage = useRenderBackgroundImage(
    mobileImage,
    tabletImage,
    desktopImage
  );

  return (
    <SectionGrid>
      <BackgroundAsset>
        <Image fluid={backgroundImage} />
      </BackgroundAsset>
      <HeadlineWrapper>
        <Headline2 />
      </HeadlineWrapper>
    </SectionGrid>
  );
};

export default DesignStatementSection;

const HeadlineWrapper = styled.div`
  padding: 0 0 0 16px;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  z-index: 1;
  ${above.mobile`
    padding: 0 0 0 50px;
  `}
  ${above.tablet`
    padding: 0;
    justify-self: center;
    width: 54rem;
  `}
`;
