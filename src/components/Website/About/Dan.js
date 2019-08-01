import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";

import { SectionGrid, BackgroundAsset } from "../../../styles/GridContainer";
import DanHeadline from "./Headlines/DanHeadline";
import Certifications from "./Certifications";
import DividerMarker1 from "../../../svgs/DividerMarker1";
import DividerMarker2 from "../../../svgs/DividerMarker2";
import useRenderBackgroundImage from "../../../hooks/useRenderBackgroundImage";
import useIsBackgroundReady from "../../../hooks/useIsBackgroundReady";
import BackgroundImageLoader from "../../Shared/BackgroundImageLoader";
import { above } from "../../../styles/Theme";

const Dan = () => {
  const query = graphql`
    query {
      danMobile: file(
        sourceInstanceName: { eq: "AboutImages" }
        name: { eq: "dan-600x1300" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 1300, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      danTablet: file(
        sourceInstanceName: { eq: "AboutImages" }
        name: { eq: "dan-834x1112" }
      ) {
        childImageSharp {
          fluid(maxWidth: 834, maxHeight: 1112, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      danIpadPro: file(
        sourceInstanceName: { eq: "AboutImages" }
        name: { eq: "dan-1024x1112" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1024, maxHeight: 1112, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      danLaptop: file(
        sourceInstanceName: { eq: "AboutImages" }
        name: { eq: "dan-1440x900" }
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
  const mobile = images.danMobile;
  const tablet = images.danTablet;
  const ipadPro = images.danIpadPro;
  const laptop = images.danLaptop;

  const background = useRenderBackgroundImage(mobile, tablet, ipadPro, laptop);
  const backgroundReady = useIsBackgroundReady(background);

  return (
    <SectionGrid>
      <TopDivider />
      <BackgroundAsset>
        {backgroundReady ? (
          <Image fluid={background} />
        ) : (
          <BackgroundImageLoader />
        )}
      </BackgroundAsset>
      <ContentWrapper>
        <DanHeadline />
        <Certifications dan={true} />
      </ContentWrapper>
      <BottomDivider />
    </SectionGrid>
  );
};

export default Dan;

const ContentWrapper = styled.div`
  margin: 80px 0 0 20px;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 240px;
  z-index: 1;
  ${above.mobile`
    margin: 120px 0 0 160px;
  `}
  ${above.tablet`
    margin: 200px 0 0 200px;
  `}
  ${above.ipadPro`
    margin: 200px 0 0 400px;
  `}
`;

const TopDivider = styled(DividerMarker1)`
  position: absolute;
  top: 0;
  right: 0;
  width: 180%;
  transform: translateY(-36px);
  z-index: 2;
  ${above.mobile`
    width: 120%;
  `}
  ${above.tablet`
    width: 100%;
    transform: translateY(-56px);
  `}
  ${above.ipadPro`
    width: 100%;
    transform: translateY(-66px);
  `}
`;

const BottomDivider = styled(DividerMarker2)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 180%;
  transform: translateY(26px) rotate(180deg);
  z-index: 2;
  ${above.mobile`
    width: 120%;
  `}
  ${above.tablet`
    width: 100%;
    transform: translateY(46px) rotate(180deg);
  `}
  ${above.ipadPro`
    width: 100%;
    transform: translateY(66px) rotate(180deg);
  `}
`;
