import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import Image from "gatsby-image";

import { SectionGrid, BackgroundAsset } from "../../../styles/GridContainer";
import BenefitCard from "./BenefitCard";
import DividerMarker1 from "../../../svgs/DividerMarker1";
import DividerMarkerTriangle from "../../../svgs/DividerMarkerTriangle";
import useRenderBackgroundImage from "../../../hooks/useRenderBackgroundImage";
import { above } from "../../../styles/Theme";

const Section3 = () => {
  const query = graphql`
    query {
      benefit6: file(
        sourceInstanceName: { eq: "TheAppCopy" }
        name: { eq: "BenefitCard6" }
      ) {
        childMarkdownRemark {
          html
          frontmatter {
            icon
            topHeadline
            bottomHeadline
          }
        }
      }
      benefit7: file(
        sourceInstanceName: { eq: "TheAppCopy" }
        name: { eq: "BenefitCard7" }
      ) {
        childMarkdownRemark {
          html
          frontmatter {
            icon
            topHeadline
            bottomHeadline
          }
        }
      }
      mobileBackground: file(
        sourceInstanceName: { eq: "ProgramImages" }
        name: { eq: "theapp-kneeling-alt-press-600x1800" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 1800, quality: 90) {
            ...GatsbyImageSharpFluid
            aspectRatio
          }
        }
      }
      tabletBackground: file(
        sourceInstanceName: { eq: "ProgramImages" }
        name: { eq: "theapp-kneeling-alt-press-834x1112" }
      ) {
        childImageSharp {
          fluid(maxWidth: 834, maxHeight: 1112, quality: 90) {
            ...GatsbyImageSharpFluid
            aspectRatio
          }
        }
      }
      laptopBackground: file(
        sourceInstanceName: { eq: "ProgramImages" }
        name: { eq: "theapp-kneeling-alt-press-1440x900" }
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

  const data = useStaticQuery(query);

  const benefit6Icon = data.benefit6.childMarkdownRemark.frontmatter.icon;
  const benefit6TopHeadline =
    data.benefit6.childMarkdownRemark.frontmatter.topHeadline;
  const benefit6BottomHeadline =
    data.benefit6.childMarkdownRemark.frontmatter.bottomHeadline;
  const benefit6Body = data.benefit6.childMarkdownRemark.html;

  const benefit7Icon = data.benefit7.childMarkdownRemark.frontmatter.icon;
  const benefit7TopHeadline =
    data.benefit7.childMarkdownRemark.frontmatter.topHeadline;
  const benefit7BottomHeadline =
    data.benefit7.childMarkdownRemark.frontmatter.bottomHeadline;
  const benefit7Body = data.benefit7.childMarkdownRemark.html;

  const mobile = data.mobileBackground;
  const tablet = data.tabletBackground;
  const laptop = data.laptopBackground;

  const background = useRenderBackgroundImage(mobile, tablet, laptop);

  return (
    <SectionGrid>
      <TopDivider />
      <BackgroundAsset>
        <Image fluid={background} />
      </BackgroundAsset>
      <BenefitCardWrapper>
        <BenefitCard
          icon={benefit6Icon}
          topHeadline={benefit6TopHeadline}
          bottomHeadline={benefit6BottomHeadline}
          body={benefit6Body}
        />
        <BenefitCard
          icon={benefit7Icon}
          topHeadline={benefit7TopHeadline}
          bottomHeadline={benefit7BottomHeadline}
          body={benefit7Body}
        />
      </BenefitCardWrapper>
      <BottomDivider />
    </SectionGrid>
  );
};

export default Section3;

const BenefitCardWrapper = styled.div`
  margin: 80px 0 0 0;
  padding: 0 16px;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  row-gap: 80px;
  align-items: start;
  justify-items: center;
  z-index: 1;
  ${above.mobile`
    margin: 200px 0 0 120px;
    row-gap: 120px;
    justify-items: start;
  `}
  ${above.tablet`
    justify-items: center;
  `}
`;

const TopDivider = styled(DividerMarker1)`
  position: absolute;
  top: 0;
  left: 0;
  width: 200%;
  transform: translateY(-36px);
  z-index: 2;
  ${above.mobile`
    width: 100%;
    transform: translateY(-26px);
  `}
  ${above.tablet`
    transform: translateY(-66px);
  `}
`;

const BottomDivider = styled(DividerMarkerTriangle)`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 180%;
  transform: translate(0, 30px) rotate(180deg);
  z-index: 2;
  ${above.mobile`
    width: 100%;
    transform: translate(0, 40px) rotate(180deg);
  `}
  ${above.tablet`
    transform: translate(0, 70px) rotate(180deg);
  `}
`;
