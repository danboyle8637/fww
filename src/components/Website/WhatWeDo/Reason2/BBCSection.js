import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";

import { SectionGrid, BackgroundAsset } from "../../../../styles/GridContainer";
import BBCLogo from "../../../../svgs/BodyBurnChallengesLogo";
import BBCCopy from "./Copy/BBCCopy";
import useRenderBackgroundImage from "../../../../hooks/useRenderBackgroundImage";
import { above } from "../../../../styles/Theme";

const BBCSection = () => {
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
      <BackgroundAsset>
        <Image fluid={background} />
      </BackgroundAsset>
      <ContentWrapper>
        <Logo />
        <BBCCopy />
      </ContentWrapper>
    </SectionGrid>
  );
};

export default BBCSection;

const Logo = styled(BBCLogo)`
  width: 320px;
  ${above.mobile`
    width: 460px;
  `}
  ${above.tablet`
    width: 540px;
  `}
`;

const ContentWrapper = styled.div`
  margin: 80px 0 0 16px;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 70%;
  z-index: 1;
  ${above.mobile`
    margin: 160px 0 0 40px;
    width: 50%;
  `}
  ${above.tablet`
    margin: 280px 0 0 80px;
    width: 40%;
  `}
`;
