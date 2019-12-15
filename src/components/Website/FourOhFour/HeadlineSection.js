import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql, navigate } from "gatsby";
import Image from "gatsby-image";

import { SectionGrid } from "../../../styles/GridContainer";
import FWWLogo from "../../../svgs/FWWLogo";
import Headline from "./Headline";
import BaseButton from "../../Buttons/BaseButton";
import userRenderBackgroundImage from "../../../hooks/useRenderBackgroundImage";
import useIsBackgroundReady from "../../../hooks/useIsBackgroundReady";
import BackgroundImageLoader from "../../Shared/BackgroundImageLoader";
import { above } from "../../../styles/Theme";

const HeadlineSection = () => {
  const query = graphql`
    query {
      mobileFourOhFour: file(
        sourceInstanceName: { eq: "HomeImages" }
        name: { eq: "error-kindal-background-600x1300" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 1300, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      tabletFourOhFour: file(
        sourceInstanceName: { eq: "HomeImages" }
        name: { eq: "error-kindal-background-834x1112" }
      ) {
        childImageSharp {
          fluid(maxWidth: 834, maxHeight: 1112, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ipadProFourOhFour: file(
        sourceInstanceName: { eq: "HomeImages" }
        name: { eq: "error-kindal-background-1024x1366" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1024, maxHeight: 1366, quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      laptopFourOhFour: file(
        sourceInstanceName: { eq: "HomeImages" }
        name: { eq: "error-kindal-background-1440x900" }
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
  const mobile = images.mobileFourOhFour;
  const tablet = images.tabletFourOhFour;
  const ipadPro = images.ipadProFourOhFour;
  const laptop = images.laptopFourOhFour;

  const background = userRenderBackgroundImage(mobile, tablet, ipadPro, laptop);
  const backgroundReady = useIsBackgroundReady(background);

  const handleButtonClick = () => navigate("/");

  return (
    <SectionGrid>
      {backgroundReady ? (
        <BackgroundImage
          fluid={background}
          alt="Kindal shocked you are on the 404 page"
          title="Kindal shocked you're on the 404 page."
        />
      ) : (
        <BackgroundImageLoader />
      )}
      <ContentWrapper>
        <HeadlineWrapper>
          <Logo />
          <Headline />
        </HeadlineWrapper>
        <ButtonWrapper>
          <BaseButton handleClick={handleButtonClick}>Go Back Home</BaseButton>
        </ButtonWrapper>
      </ContentWrapper>
    </SectionGrid>
  );
};

export default HeadlineSection;

const Logo = styled(FWWLogo)`
  align-self: flex-start;
  width: 200px;
  ${above.mobile`
    width: 300px;
  `}
`;

const BackgroundImage = styled(Image)`
  margin: 0;
  padding: 0;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  z-index: 1;
`;

const ContentWrapper = styled.div`
  margin: 100px 0 0 0;
  padding: 20px 16px;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 2;
  ${above.mobile`
    justify-content: center;
    width: 60%;
  `}
  ${above.tablet`
    margin: 140px 0 0 80px;
    justify-content: flex-start;
    width: 50%;
  `}
  ${above.ipadPro`
    margin: 140px 0 0 340px;
    width: 40%;
  `}
`;

const HeadlineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 70%;
  ${above.mobile`
    width: 100%;
  `}
`;

const ButtonWrapper = styled.div`
  justify-self: flex-end;
  display: flex;
  justify-content: center;
  width: 100%;
  ${above.mobile`
    margin: 80px 0 0 0;
  `}
  ${above.tablet`
    margin: 40px 0 0 0;
  `}
`;
