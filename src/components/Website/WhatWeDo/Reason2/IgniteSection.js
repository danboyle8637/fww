import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";

import { SectionGrid, BackgroundAsset } from "../../../../styles/GridContainer";
import IgniteLogo from "../../../../svgs/IgniteLogo";
import DividerMarkerTriangle from "../../../../svgs/DividerMarkerTriangle";
import IgniteCopy from "./Copy/IgniteCopy";
import useRenderBackgroundImage from "../../../../hooks/useRenderBackgroundImage";
import { above } from "../../../../styles/Theme";

const IgniteSection = () => {
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
        <IgniteCopy />
      </ContentWrapper>
    </SectionGrid>
  );
};

export default IgniteSection;

const Logo = styled(IgniteLogo)`
  width: 220px;
  ${above.mobile`
    width: 260px;
  `}
  ${above.tablet`
    width: 340px;
  `}
`;

const Divider = styled(DividerMarkerTriangle)`
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  z-index: 1;
  transform: translateY(-45px);
  ${above.mobile`
    width: 100%;
  `}
  ${above.tablet`
    transform: translateY(-85px);
  `}
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
  ${above.mobile`
    margin: 140px 0 0 120px;
    width: 40%;
  `}
  ${above.tablet`
    margin: 140px 0 0 240px;
    width: 30%;
  `}
`;
