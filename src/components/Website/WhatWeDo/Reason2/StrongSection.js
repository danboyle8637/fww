import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";

import { SectionGrid, BackgroundAsset } from "../../../../styles/GridContainer";
import StrongLogo from "../../../../svgs/StrongLogo";
import DividerMarkerTriangle from "../../../../svgs/DividerMarkerTriangle";
import StrongCopy from "./Copy/StrongCopy";
import StrongHeadline from "./Headlines/StrongHeadline";
import useRenderBackgroundImage from "../../../../hooks/useRenderBackgroundImage";
import useIsBackgroundReady from "../../../../hooks/useIsBackgroundReady";
import BackgroundImageLoader from "../../../Shared/BackgroundImageLoader";
import { above } from "../../../../styles/Theme";

const StrongSection = () => {
  const query = graphql`
    query {
      strongMobile: file(
        sourceInstanceName: { eq: "WhatWeDoImages" }
        name: { eq: "strong-kneeling-press-600x1300" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 1300, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      strongTablet: file(
        sourceInstanceName: { eq: "WhatWeDoImages" }
        name: { eq: "strong-kneeling-press-834x1112" }
      ) {
        childImageSharp {
          fluid(maxWidth: 834, maxHeight: 1112, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      strongIpadPro: file(
        sourceInstanceName: { eq: "WhatWeDoImages" }
        name: { eq: "strong-kneeling-press-1024x1112" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1024, maxHeight: 1112, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      strongLaptop: file(
        sourceInstanceName: { eq: "WhatWeDoImages" }
        name: { eq: "strong-kneeling-press-1440x900" }
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
      <Divider />
      <BackgroundAsset>
        {backgroundReady ? (
          <Image
            fluid={background}
            alt="Kindal doing a kneeling double kettlebell press"
            title="Kindal doing a kneeling double kettlebell press"
          />
        ) : (
          <BackgroundImageLoader />
        )}
      </BackgroundAsset>
      <ContentWrapper>
        <Logo />
        <StrongHeadline />
        <CopyWrapper>
          <StrongCopy />
        </CopyWrapper>
      </ContentWrapper>
    </SectionGrid>
  );
};

export default StrongSection;

const Logo = styled(StrongLogo)`
  width: 100%;
`;

const Divider = styled(DividerMarkerTriangle)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 200%;
  z-index: 2;
  transform: translate(-60px, 15px) rotate(180deg);
  ${above.mobile`
    width: 100%;
    transform: translateY(35px) rotate(180deg);
  `}
  ${above.tablet`
    transform: translateY(65px) rotate(180deg);
  `}
  ${above.ipadPro`
    transform: translateY(95px) rotate(180deg);
  `}
`;

const ContentWrapper = styled.div`
  margin: 40px 0 0 0;
  padding: 0 16px;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  z-index: 1;
  ${above.mobile`
    margin: 60px 0 0 40px;
    width: 80%;
  `}
  ${above.tablet`
    margin: 260px 0 0 10px;
    width: 68%;
  `}
  ${above.ipadPro`
    margin: 200px 0 0 10px;
    width: 58%;
  `}
`;

const CopyWrapper = styled.div`
  width: 56%;
  ${above.mobile`
    width: 70%;
  `}
  ${above.tablet`
    width: 80%;
  `}
`;
