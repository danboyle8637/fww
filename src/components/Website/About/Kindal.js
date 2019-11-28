import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";

import { SectionGrid, BackgroundAsset } from "../../../styles/GridContainer";
import KindalHeadline from "./Headlines/KindalHeadline";
import Certifications from "./Certifications";
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
            presentationWidth
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
            presentationWidth
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
            presentationWidth
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
            presentationWidth
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
      <TopLine />
      <BackgroundAsset>
        {backgroundReady ? (
          <Image
            fluid={background}
            alt="Kindal smiling with her arms crossed."
            title="Kindal smiling with her arms crossed."
          />
        ) : (
          <BackgroundImageLoader />
        )}
      </BackgroundAsset>
      <ContentWrapper>
        <KindalHeadline />
        <Certifications kindal={true} />
      </ContentWrapper>
      <BottomLine />
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
    margin: 200px 0 0 200px;
  `}
  ${above.ipadPro`
    margin: 200px 0 0 400px;
  `}
`;

const TopLine = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 16px;
  background: rgba(43, 44, 58, 0.5);
  z-index: 3;
`;

const BottomLine = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 16px;
  background: rgba(43, 44, 58, 0.5);
  z-index: 3;
`;
