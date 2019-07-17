import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

import { SectionGrid, BackgroundAsset } from "../../../styles/GridContainer";
import useRenderBackgroundImage from "../../../hooks/useRenderBackgroundImage";
import DividerMarker2 from "../../../svgs/DividerMarker2";
import { above } from "../../../styles/Theme";

const Section5 = () => {
  const query = graphql`
    query {
      nutritionMobile: file(
        sourceInstanceName: { eq: "NutritionImages" }
        name: { eq: "steak-salad-600x1300" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 1300, quality: 90) {
            ...GatsbyImageSharpFluid
            aspectRatio
          }
        }
      }
      nutritionTablet: file(
        sourceInstanceName: { eq: "NutritionImages" }
        name: { eq: "steak-salad-834x1112" }
      ) {
        childImageSharp {
          fluid(maxWidth: 834, maxHeight: 1112, quality: 90) {
            ...GatsbyImageSharpFluid
            aspectRatio
          }
        }
      }
      nutritionLaptop: file(
        sourceInstanceName: { eq: "NutritionImages" }
        name: { eq: "steak-salad-1440x900" }
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
  const mobile = images.nutritionMobile;
  const tablet = images.nutritionTablet;
  const laptop = images.nutritionLaptop;

  const background = useRenderBackgroundImage(mobile, tablet, laptop, laptop);

  return (
    <SectionGrid>
      <TopDivider />
      <BackgroundAsset>
        <Image fluid={background} />
      </BackgroundAsset>
      <BottomDivider />
    </SectionGrid>
  );
};

export default Section5;

const TopDivider = styled(DividerMarker2)`
  position: absolute;
  top: 0;
  left: 0;
  width: 180%;
  z-index: 2;
  transform: translateY(-30px);
  ${above.mobile`
    width: 100%;
    transform: translateY(-30px);
  `}
`;

const BottomDivider = styled(DividerMarker2)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 180%;
  z-index: 2;
  transform: translateY(10px) rotate(180deg);
  ${above.mobile`
    width: 100%;
    transform: translateY(10px) rotate(180deg);
  `}
`;
