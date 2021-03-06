import React from "react";
import { useStaticQuery, graphql, navigate } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";

import { ElementContainer } from "../../../styles/Containers";
import { SetBodyText } from "../../../styles/BodyText";
import BaseButton from "../../Buttons/BaseButton";
import Logo from "../../../svgs/BodyBurnChallengesLogo";
import useRenderBackgroundImage from "../../../hooks/useRenderBackgroundImage";
import useIsBackgroundReady from "../../../hooks/useIsBackgroundReady";
import BackgroundImageLoader from "../../Shared/BackgroundImageLoader";
import { above } from "../../../styles/Theme";

const BBCCard = () => {
  const query = graphql`
    query {
      bbcMobileBackground: file(
        sourceInstanceName: { eq: "ProgramImages" }
        name: { eq: "bbc-beast-squat-600x1300" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 1300, quality: 90) {
            ...GatsbyImageSharpFluid
            presentationWidth
          }
        }
      }
      bbcTabletBackground: file(
        sourceInstanceName: { eq: "ProgramImages" }
        name: { eq: "bbc-beast-squat-864x600" }
      ) {
        childImageSharp {
          fluid(maxWidth: 864, maxHeight: 600, quality: 90) {
            ...GatsbyImageSharpFluid
            presentationWidth
          }
        }
      }
      bbcLaptopBackground: file(
        sourceInstanceName: { eq: "ProgramImages" }
        name: { eq: "bbc-beast-squat-864x420" }
      ) {
        childImageSharp {
          fluid(maxWidth: 864, maxHeight: 420, quality: 90) {
            ...GatsbyImageSharpFluid
            presentationWidth
          }
        }
      }
      bbcDescription: file(
        sourceInstanceName: { eq: "BBCCopy" }
        name: { eq: "BBCHeadline" }
      ) {
        childMarkdownRemark {
          html
        }
      }
    }
  `;

  const data = useStaticQuery(query);
  const mobile = data.bbcMobileBackground;
  const tablet = data.bbcTabletBackground;
  const laptop = data.bbcLaptopBackground;
  const body = data.bbcDescription.childMarkdownRemark.html;

  const background = useRenderBackgroundImage(mobile, tablet, laptop, laptop);
  const backgroundReady = useIsBackgroundReady(background);

  const handleButtonClick = () => navigate("/body-burn-challenges");

  return (
    <CardContainer>
      <CardGrid>
        {backgroundReady ? (
          <BBCBackground
            fluid={background}
            alt="Kindal doing an exercise called a beast squat."
            title="Kindal doing an exercise called a beast squat."
          />
        ) : (
          <BackgroundImageLoader />
        )}
        <ContentContainer>
          <LogoDescriptionWrapper>
            <BBCLogo />
            <SetBodyText
              setFontSize={"14px"}
              setMobileMarginTop={20}
              dangerouslySetInnerHTML={{ __html: body }}
            />
          </LogoDescriptionWrapper>
          <ElementContainer>
            <BaseButton handleClick={handleButtonClick}>
              Learn More About BBC
            </BaseButton>
          </ElementContainer>
        </ContentContainer>
      </CardGrid>
    </CardContainer>
  );
};

export default BBCCard;

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
  border-radius: 12px;
  width: 90%;
  height: 90%;
  box-shadow: 0px 2px 3px 3px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  ${above.mobile`
    margin: 0 0 40px 0;
    width: 100%;
  `}
`;

const ContentContainer = styled.div`
  padding: 40px 16px 30px 16px;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
  ${above.mobile`
    padding: 80px 0 28px 24px;
    width: 50%;
  `}
  ${above.tablet`
    padding: 80px 0 32px 28px;
  `}
`;

const BBCBackground = styled(Image)`
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

const BBCLogo = styled(Logo)`
  width: 100%;
`;

const LogoDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
