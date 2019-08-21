import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";

import { ElementContainer } from "../../../../styles/Containers";
import { SetBodyText } from "../../../../styles/BodyText";
import { InnerButton } from "../../../../styles/Buttons";
import Logo from "../../../../svgs/StrongResetLogo";
import useRenderBackgroundImage from "../../../../hooks/useRenderBackgroundImage";
import useIsBackgroundReady from "../../../../hooks/useIsBackgroundReady";
import BackgroundImageLoader from "../../../Shared/BackgroundImageLoader";
import { above } from "../../../../styles/Theme";

const StrongResetCard = () => {
  const query = graphql`
    query {
      strongResetMobileBackground: file(
        sourceInstanceName: { eq: "ProgramImages" }
        name: { eq: "reset-strong-600x1300" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 1300, quality: 90) {
            ...GatsbyImageSharpFluid
            aspectRatio
          }
        }
      }
      strongResetTabletBackground: file(
        sourceInstanceName: { eq: "ProgramImages" }
        name: { eq: "reset-strong-864x600" }
      ) {
        childImageSharp {
          fluid(maxWidth: 864, maxHeight: 600, quality: 90) {
            ...GatsbyImageSharpFluid
            aspectRatio
          }
        }
      }
      strongResetLaptopBackground: file(
        sourceInstanceName: { eq: "ProgramImages" }
        name: { eq: "reset-strong-864x420" }
      ) {
        childImageSharp {
          fluid(maxWidth: 864, maxHeight: 420, quality: 90) {
            ...GatsbyImageSharpFluid
            aspectRatio
          }
        }
      }
      strongDescription: file(
        sourceInstanceName: { eq: "ProgramsCopy" }
        name: { eq: "7DayStrongResetCard" }
      ) {
        childMarkdownRemark {
          html
        }
      }
    }
  `;

  const data = useStaticQuery(query);
  const mobile = data.strongResetMobileBackground;
  const tablet = data.strongResetTabletBackground;
  const laptop = data.strongResetLaptopBackground;
  const body = data.strongDescription.childMarkdownRemark.html;

  const background = useRenderBackgroundImage(mobile, tablet, laptop, laptop);
  const backgroundReady = useIsBackgroundReady(background);

  return (
    <CardContainer>
      <CardGrid>
        {backgroundReady ? (
          <StrongBackground
            fluid={background}
            alt="Kindal doing a two handed kettlebell swing."
            title="Two handed kettlebell swing."
          />
        ) : (
          <BackgroundImageLoader />
        )}
        <ContentContainer>
          <LogoDescriptionWrapper>
            <StrongResetLogo />
            <ElementContainer setMobileWidth={"60%"}>
              <SetBodyText
                setFontSize={"14"}
                setMobileMarginTop={12}
                dangerouslySetInnerHTML={{ __html: body }}
              />
            </ElementContainer>
          </LogoDescriptionWrapper>
          <ElementContainer>
            <InnerButton to={"/join-a-7-day-reset-program"}>
              Join The Reset for FREE!
            </InnerButton>
          </ElementContainer>
        </ContentContainer>
      </CardGrid>
    </CardContainer>
  );
};

export default StrongResetCard;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  ${above.mobile`
    width: 100%;
  `}
`;

const CardGrid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  background: ${props => props.theme.mainBackgroundBorderColor};
  width: 90%;
  height: 90%;
  border-radius: 12px;
  box-shadow: 0px 2px 3px 3px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  ${above.mobile`
    margin: 0 0 40px 0;
    border-radius: 6px;
    width: 100%;
  `}
`;

const ContentContainer = styled.div`
  padding: 30px 16px 30px 16px;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
  ${above.mobile`
    padding: 60px 0 28px 24px;
    width: 50%;
  `}
  ${above.tablet`
    padding: 60px 0 32px 28px;
  `}
`;

const StrongBackground = styled(Image)`
  margin: 0;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  border-radius: 12px;
  ${above.mobile`
    margin: 8px;
    border-radius: 6px;
  `}
  ${above.tablet`
    margin: 12px;
  `}
`;

const StrongResetLogo = styled(Logo)`
  width: 100%;
`;

const LogoDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
