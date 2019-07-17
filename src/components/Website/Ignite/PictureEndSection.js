import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

import { SectionGrid, BackgroundAsset } from "../../../styles/GridContainer";
import useRenderBackgroundImage from "../../../hooks/useRenderBackgroundImage";
import useIsBackgroundReady from "../../../hooks/useIsBackgroundReady";
import BackgroundImageLoader from "../../Shared/BackgroundImageLoader";
import DividerMarker2 from "../../../svgs/DividerMarker2";
import { above } from "../../../styles/Theme";

const PictureEndSection = () => {
  const query = graphql`
    query {
      igniteEndMobile: file(
        sourceInstanceName: { eq: "ProgramImages" }
        name: { eq: "ignite-seated-band-row-600x1300" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 1300, quality: 90) {
            ...GatsbyImageSharpFluid
            aspectRatio
          }
        }
      }
      igniteEndTablet: file(
        sourceInstanceName: { eq: "ProgramImages" }
        name: { eq: "ignite-seated-band-row-834x1112" }
      ) {
        childImageSharp {
          fluid(maxWidth: 834, maxHeight: 1112, quality: 90) {
            ...GatsbyImageSharpFluid
            aspectRatio
          }
        }
      }
      igniteEndLaptop: file(
        sourceInstanceName: { eq: "ProgramImages" }
        name: { eq: "ignite-seated-band-row-1440x900" }
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
  const mobile = images.igniteEndMobile;
  const tablet = images.igniteEndTablet;
  const laptop = images.igniteEndLaptop;

  const background = useRenderBackgroundImage(mobile, tablet, laptop, laptop);
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
      <ContentWrapper />
    </SectionGrid>
  );
};

export default PictureEndSection;

const ContentWrapper = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TopDivider = styled(DividerMarker2)`
  position: absolute;
  top: 0;
  left: 0;
  width: 180%;
  z-index: 2;
  transform: translateY(-15px);
  ${above.mobile`
    width: 100%;
    transform: translateY(-15px);
  `}
  ${above.tablet`
    transform: translateY(-35px);
  `}
`;
