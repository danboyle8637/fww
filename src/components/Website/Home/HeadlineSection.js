import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql, Link } from "gatsby";
import Image from "gatsby-image";

import {
  SectionGrid,
  BackgroundAsset,
  HeadlineContainer,
} from "../../../styles/GridContainer";
import { ElementContainer } from "../../../styles/Containers";
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

  const homeButtons = siteConfig.home.homeLinks.map(button => {
    const id = button.id;
    const path = button.path;
    const name = button.name;
    return (
      <HomeButton key={id} to={path}>
        {name}
      </HomeButton>
    );
  });

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
      <HeadlineContainer column>
        <HeadlineWrapper>
          <Logo />
          <Headline />
        </HeadlineWrapper>
        <ElementContainer column setMobileMarginTop={40} moveTabletX={10}>
          {homeButtons}
        </ElementContainer>
      </HeadlineContainer>
    </SectionGrid>
  );
};

export default HeadlineSection;

const Logo = styled(FWWLogo)`
  width: 160px;
`;

const HeadlineWrapper = styled.div`
  margin-left: 20px;
  ${above.mobile`
    margin-left: 0;
  `}
`;

const HomeButton = styled(Link)`
  margin: 0 0 20px 0;
  padding: 8px 40px 8px 0;
  background: rgba(215, 218, 255, 0.3);
  border: 2px solid ${props => props.theme.bodyText};
  border-radius: 6px;
  color: ${props => props.theme.whiteText};
  font-size: 16px;
  text-transform: capitalize;
  text-align: right;
  text-decoration: none;
  width: 14rem;
  transform: translateX(-40px);
  transition: background-color, border, transform, 150ms ease-out;
  cursor: pointer;
  ${above.mobile`
    padding: 8px;
    text-align: center;
    transform: translateX(0);
  `}
  ${above.tablet`
    &:hover {
      background: rgba(139, 83, 246, 0.3);
      border: 2px solid ${props => props.theme.secondaryAccent};
      transform: translateX(20px);
    }
  `}
`;
