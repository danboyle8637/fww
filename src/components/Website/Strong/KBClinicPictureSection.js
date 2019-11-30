import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

import { SectionGrid, BackgroundAsset } from "../../../styles/GridContainer";
import useRenderBackgroundImage from "../../../hooks/useRenderBackgroundImage";
import useIsBackgroundReady from "../../../hooks/useIsBackgroundReady";
import BackgroundImageLoader from "../../Shared/BackgroundImageLoader";
import Headline2 from "./Headlines/Headline2";
import { above } from "../../../styles/Theme";

const KBClinicPictureSection = () => {
  const query = graphql`
    query {
      kbClinicMobile: file(
        sourceInstanceName: { eq: "ProgramImages" }
        name: { eq: "strong-swing-600x1300" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 1300, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kbClinicTablet: file(
        sourceInstanceName: { eq: "ProgramImages" }
        name: { eq: "strong-swing-834x1112" }
      ) {
        childImageSharp {
          fluid(maxWidth: 834, maxHeight: 1112, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kbClinicIpadPro: file(
        sourceInstanceName: { eq: "ProgramImages" }
        name: { eq: "strong-swing-1024x1024" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1024, maxHeight: 1024, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      kbClinicLaptop: file(
        sourceInstanceName: { eq: "ProgramImages" }
        name: { eq: "strong-swing-1440x900" }
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
  const mobile = images.kbClinicMobile;
  const tablet = images.kbClinicTablet;
  const ipadPro = images.kbClinicIpadPro;
  const laptop = images.kbClinicLaptop;

  const background = useRenderBackgroundImage(mobile, tablet, ipadPro, laptop);
  const backgroundReady = useIsBackgroundReady(background);

  return (
    <SectionGrid>
      <TopLine />
      <BackgroundAsset>
        {backgroundReady ? (
          <Image
            fluid={background}
            alt="Kindal doing a single arm kettlebell swing."
            title="Single arm kettlebell swing."
          />
        ) : (
          <BackgroundImageLoader />
        )}
      </BackgroundAsset>
      <ContentWrapper>
        <Headline2 />
      </ContentWrapper>
      <BottomLine />
    </SectionGrid>
  );
};

export default KBClinicPictureSection;

const ContentWrapper = styled.div`
  margin: 40px 0 0 20px;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  z-index: 2;
  ${above.tablet`
    margin: 80px 0 0 160px;
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
