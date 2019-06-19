import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

import { SectionGrid, BackgroundAsset } from "../../../styles/GridContainer";
import useRenderBackgroundImage from "../../../hooks/useRenderBackgroundImage";
import DividerMarkerTriangle from "../../../svgs/DividerMarkerTriangle";
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
            aspectRatio
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
            aspectRatio
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
            aspectRatio
          }
        }
      }
    }
  `;

  const images = useStaticQuery(query);
  const mobile = images.kbClinicMobile;
  const tablet = images.kbClinicTablet;
  const laptop = images.kbClinicLaptop;

  const background = useRenderBackgroundImage(mobile, tablet, laptop);

  return (
    <SectionGrid>
      <TopDivider />
      <BackgroundAsset>
        <Image fluid={background} />
      </BackgroundAsset>
      <ContentWrapper>
        <Headline2 />
      </ContentWrapper>
      <BottomDivider />
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

const TopDivider = styled(DividerMarkerTriangle)`
  position: absolute;
  top: 0;
  left: 0;
  width: 180%;
  z-index: 2;
  transform: translate(-20px, -35px) rotateY(180deg) rotateZ(6deg);
  ${above.mobile`
    width: 100%;
    transform: translateY(-35px) rotateY(180deg);
  `}
  ${above.tablet`
    transform: translateY(-85px) rotateY(180deg);
  `}
`;

const BottomDivider = styled(DividerMarkerTriangle)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 180%;
  z-index: 1;
  transform: translateY(45px) rotate(-180deg) rotateY(180deg);
  ${above.mobile`
    width: 100%;
    transform: translateY(50px) rotate(-180deg) rotateY(180deg);
  `}
  ${above.tablet`
    width: 100%;
    transform: translateY(100px) rotate(-180deg) rotateY(180deg);
  `}
`;
