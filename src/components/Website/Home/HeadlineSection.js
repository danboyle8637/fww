import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

import { SectionGrid, BackgroundAsset } from "../../../styles/GridContainer";
import { ElementContainer } from "../../../styles/Containers";
import { InnerButton } from "../../../styles/Buttons";
import Headline from "./Headline";
import FWWLogo from "../../../svgs/FWWLogo";
import siteConfig from "../../../utils/siteConfig";
import useRenderBackgroundImage from "../../../hooks/useRenderBackgroundImage";
import useIsBackgroundReady from "../../../hooks/useIsBackgroundReady";
import BackgroundImageLoader from "../../Shared/BackgroundImageLoader";
import { above } from "../../../styles/Theme";

const HeadlineSection = () => {
  const query = graphql`
    query {
      homeMobile: file(
        sourceInstanceName: { eq: "HomeImages" }
        name: { eq: "walking-dark-kettlebells-600x1300" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 1300, quality: 90) {
            ...GatsbyImageSharpFluid
            aspectRatio
          }
        }
      }
      homeTablet: file(
        sourceInstanceName: { eq: "HomeImages" }
        name: { eq: "walking-dark-kettlebells-834x1112" }
      ) {
        childImageSharp {
          fluid(maxWidth: 834, maxHeight: 1112, quality: 90) {
            ...GatsbyImageSharpFluid
            aspectRatio
          }
        }
      }
      homeIpadPro: file(
        sourceInstanceName: { eq: "HomeImages" }
        name: { eq: "walking-dark-kettlebells-1024x1366" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1024, maxHeight: 1366, quality: 90) {
            ...GatsbyImageSharpFluid
            aspectRatio
          }
        }
      }
      homeLaptop: file(
        sourceInstanceName: { eq: "HomeImages" }
        name: { eq: "walking-dark-kettlebells-1440x900" }
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

  const image = useStaticQuery(query);
  const mobile = image.homeMobile;
  const tablet = image.homeTablet;
  const ipadPro = image.homeIpadPro;
  const desktop = image.homeLaptop;

  const background = useRenderBackgroundImage(mobile, tablet, ipadPro, desktop);
  const backgroundReady = useIsBackgroundReady(background);

  return (
    <SectionGrid>
      <BackgroundAsset>
        {backgroundReady ? (
          <Image
            fluid={background}
            alt="Kindal walking with two kettlebells racked."
            title="Kindal with two racked kettlebels"
          />
        ) : (
          <BackgroundImageLoader />
        )}
      </BackgroundAsset>
      <ContentWrapper>
        <HeadlineWrapper>
          <Logo />
          <Headline />
        </HeadlineWrapper>
        <ElementContainer column setMobileMarginTop={40} moveTabletX={10}>
          <InnerButton to={"/"}>Get Started for FREE!</InnerButton>
        </ElementContainer>
      </ContentWrapper>
    </SectionGrid>
  );
};

export default HeadlineSection;

const Logo = styled(FWWLogo)`
  width: 160px;
`;

const HeadlineWrapper = styled.div``;

const ContentWrapper = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
`;
