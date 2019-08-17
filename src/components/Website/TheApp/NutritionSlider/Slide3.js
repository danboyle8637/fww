import React, { forwardRef } from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

import useRenderBackgroundImage from "../../../../hooks/useRenderBackgroundImage";
import useIsBackgroundReady from "../../../../hooks/useIsBackgroundReady";
import BackgroundImageLoader from "../../../Shared/BackgroundImageLoader";
import NutrionLabel from "../NutritionLabel/NutritionLabel";
import { above } from "../../../../styles/Theme";

const Slide3 = forwardRef((props, ref) => {
  const query = graphql`
    query {
      lemonMobile: file(
        sourceInstanceName: { eq: "NutritionImages" }
        name: { eq: "pser-lemon-shake-600x1300" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 1300, quality: 90) {
            ...GatsbyImageSharpFluid
            aspectRatio
          }
        }
      }
      lemonTablet: file(
        sourceInstanceName: { eq: "NutritionImages" }
        name: { eq: "pser-lemon-shake-834x1112" }
      ) {
        childImageSharp {
          fluid(maxWidth: 834, maxHeight: 1112, quality: 90) {
            ...GatsbyImageSharpFluid
            aspectRatio
          }
        }
      }
      lemonLaptop: file(
        sourceInstanceName: { eq: "NutritionImages" }
        name: { eq: "pser-lemon-shake-1440x900" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1440, maxHeight: 900, quality: 90) {
            ...GatsbyImageSharpFluid
            aspectRatio
          }
        }
      }
      nutritionInfo: file(
        sourceInstanceName: { eq: "TheAppCopy" }
        name: { eq: "LemonShakeInfo" }
      ) {
        childMarkdownRemark {
          frontmatter {
            servings
            calories
            totalFat
            totalFatPercent
            carbohydrate
            carbohydratePercent
            dietaryFiber
            dietaryFiberPercent
            sugar
            protein
          }
        }
      }
    }
  `;

  const images = useStaticQuery(query);
  const mobile = images.lemonMobile;
  const tablet = images.lemonTablet;
  const laptop = images.lemonLaptop;
  const info = images.nutritionInfo.childMarkdownRemark.frontmatter;

  const background = useRenderBackgroundImage(mobile, tablet, laptop, laptop);
  const backgroundReady = useIsBackgroundReady(background);

  return (
    <NutritionGrid ref={ref}>
      <NutritionBackground>
        {backgroundReady ? (
          <Image
            fluid={background}
            alt="Fresh lemon protein shake"
            title="Fresh lemon protein shake"
          />
        ) : (
          <BackgroundImageLoader />
        )}
      </NutritionBackground>
      <ContentWrapper>
        <NutrionLabel nutrition={info} />
      </ContentWrapper>
    </NutritionGrid>
  );
});

export default Slide3;

const NutritionGrid = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  width: 100%;
  z-index: 1;
`;

const NutritionBackground = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  width: 100%;
`;

const ContentWrapper = styled.div`
  margin: 50px 0 0 0;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  justify-self: center;
  align-self: center;
  z-index: 1;
  transform: translateX(50px);
  ${above.mobile`
    justify-self: end;
    align-self: center;
    transform: translate(0px, 0px);
  `}
  ${above.tablet`
    transform: translate(0px, -40px);
  `}
  ${above.ipadPro`
    justify-self: center;
    transform: translateX(100px);
  `}
`;
