import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";

import { SectionGrid, BackgroundAsset } from "../../../styles/GridContainer";
import KindalHeadline from "./Headlines/KindalHeadline";
import Certifications from "./Certifications";
import DividerMarker1 from "../../../svgs/DividerMarker1";
import DividerMarker2 from "../../../svgs/DividerMarker2";
import useRenderBackgroundImage from "../../../hooks/useRenderBackgroundImage";
import useIsBackgroundReady from "../../../hooks/useIsBackgroundReady";
import BackgroundImageLoader from "../../Shared/BackgroundImageLoader";
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
          }
        }
      }
      kindalIpadPro: file(
        sourceInstanceName: { eq: "AboutImages" }
        name: { eq: "kindal-1024x1112" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1024, maxHeight: 1112, quality: 90) {
            ...GatsbyImageSharpFluid
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
          }
        }
      }
    }
  `;

  const images = useStaticQuery(query);
  const mobile = images.kindalMobile;
  const tablet = images.kindalTablet;
  const ipadPro = images.kindalIpadPro;
  const laptop = images.kindalLaptop;

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
        <KindalHeadline />
        <Certifications kindal={true} />
      </ContentWrapper>
      <BottomDivider />
    </SectionGrid>
  );
};

export default Kindal;

const ContentWrapper = styled.div`
  margin: 80px 0 0 20px;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 245px;
  z-index: 1;
  ${above.mobile`
    margin: 120px 0 0 160px;
  `}
  ${above.tablet`
    margin: 200px 0 0 400px;
  `}
`;

const TopDivider = styled(DividerMarker1)`
  position: absolute;
  top: 0;
  left: 0;
  width: 180%;
  transform: translateY(-36px);
  z-index: 2;
  ${above.mobile`
    width: 120%;
  `}
  ${above.tablet`
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
    transform: translateY(66px) rotate(180deg);
  `}
`;
