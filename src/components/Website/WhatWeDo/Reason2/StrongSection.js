import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";

import { SectionGrid, BackgroundAsset } from "../../../../styles/GridContainer";
import StrongLogo from "../../../../svgs/StrongLogo";
import DividerMarkerTriangle from "../../../../svgs/DividerMarkerTriangle";
import StrongCopy from "./Copy/StrongCopy";
import useRenderBackgroundImage from "../../../../hooks/useRenderBackgroundImage";

const StrongSection = () => {
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
      laptop: file(
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
  const mobile = images.mobile;
  const tablet = images.tablet;
  const laptop = images.laptop;

  const background = useRenderBackgroundImage(mobile, tablet, laptop);

  return (
    <SectionGrid>
      <Divider />
      <BackgroundAsset>
        <Image fluid={background} />
      </BackgroundAsset>
      <ContentWrapper>
        <Logo />
        <StrongCopy />
      </ContentWrapper>
    </SectionGrid>
  );
};

export default StrongSection;

const Logo = styled(StrongLogo)`
  width: 320px;
`;

const Divider = styled(DividerMarkerTriangle)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 200%;
  z-index: 1;
  transform: translate(-60px, 15px) rotate(180deg);
`;

const ContentWrapper = styled.div`
  margin: 40px 0 0 16px;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 70%;
  z-index: 1;
`;
