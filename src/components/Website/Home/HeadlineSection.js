import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

import { SectionGrid, BackgroundAsset } from "../../../styles/GridContainer";
import { ElementContainer } from "../../../styles/Containers";
import { InnerButton } from "../../../styles/Buttons";
import Headline from "./Headline";
import FWWLogo from "../../../svgs/FWWLogo";
import ScrollDownArrow from "../../Shared/ScrollDownArrow";
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
          }
        }
      }
    }
  `;

  const image = useStaticQuery(query);
  const mobile = image.homeMobile.childImageSharp.fluid;
  const tablet = image.homeTablet.childImageSharp.fluid;
  const ipadPro = image.homeIpadPro.childImageSharp.fluid;
  const laptop = image.homeLaptop.childImageSharp.fluid;

  const sources = [
    mobile,
    {
      ...laptop,
      media: `(min-width: 1100px)`,
    },
    {
      ...ipadPro,
      media: `(min-width: 960px)`,
    },
    {
      ...tablet,
      media: `(min-width: 600px)`,
    },
  ];

  //const sources = useRenderBackgroundImage(mobile, tablet, ipadPro, laptop);
  //const backgroundReady = useIsBackgroundReady(background);

  return (
    <>
      <SectionGrid>
        <BackgroundImage
          fluid={sources}
          alt="Kindal walking with two kettlebells racked."
          title="Kindal with two racked kettlebels"
        />
        <ContentWrapper>
          <HeadlineWrapper>
            <Logo />
            <Headline />
            <ScrollDownArrow scrollId="home-card-section" />
          </HeadlineWrapper>
          <ButtonWrapper>
            <InnerButton to={"/join-a-7-day-reset-program"}>
              Get Started for FREE!
            </InnerButton>
          </ButtonWrapper>
        </ContentWrapper>
      </SectionGrid>
    </>
  );
};

export default HeadlineSection;

const Logo = styled(FWWLogo)`
  align-self: flex-start;
  width: 160px;
`;

const BackgroundImage = styled(Image)`
  margin: 0;
  padding: 0;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  z-index: 1;
`;

const ContentWrapper = styled.div`
  padding: 0 16px;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 2;
  ${above.mobile`
    margin: 0 0 0 40px;
    width: 56%;
  `}
  ${above.tablet`
    justify-content: space-around;
  `}
  ${above.ipadPro`
    margin: 0 0 0 340px;
    width: 40%;
  `}
`;

const HeadlineWrapper = styled.div`
  margin: 70px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
  ${above.mobile`
    margin: 140px 0 0 0;
    width: 100%;
  `}
  ${above.tablet`
    margin: 0 0 0 0;
  `}
`;

const ButtonWrapper = styled.div`
  margin: 0 0 40px 0;
  display: flex;
  justify-content: center;
  width: 100%;
  ${above.mobile`
    margin: 0 0 120px 0;
  `}
`;
