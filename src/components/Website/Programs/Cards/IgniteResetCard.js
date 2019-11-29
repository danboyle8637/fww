import React from "react";
import { useStaticQuery, graphql, navigate } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";

import { ElementContainer } from "../../../../styles/Containers";
import { SetBodyText } from "../../../../styles/BodyText";
import BaseButton from "../../../Buttons/BaseButton";
import Logo from "../../../../svgs/IgniteResetLogo";
import useRenderBackgroundImage from "../../../../hooks/useRenderBackgroundImage";
import useIsBackgroundReady from "../../../../hooks/useIsBackgroundReady";
import BackgroundImageLoader from "../../../Shared/BackgroundImageLoader";
import { above } from "../../../../styles/Theme";

const IgniteResetCard = () => {
  const query = graphql`
    query {
      igniteResetMobileBackground: file(
        sourceInstanceName: { eq: "ProgramImages" }
        name: { eq: "reset-ignite-600x1300" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 1300, quality: 90) {
            ...GatsbyImageSharpFluid
            aspectRatio
          }
        }
      }
      igniteResetTabletBackground: file(
        sourceInstanceName: { eq: "ProgramImages" }
        name: { eq: "reset-ignite-864x600" }
      ) {
        childImageSharp {
          fluid(maxWidth: 864, maxHeight: 600, quality: 90) {
            ...GatsbyImageSharpFluid
            aspectRatio
          }
        }
      }
      igniteResetLaptopBackground: file(
        sourceInstanceName: { eq: "ProgramImages" }
        name: { eq: "reset-ignite-864x420" }
      ) {
        childImageSharp {
          fluid(maxWidth: 864, maxHeight: 420, quality: 90) {
            ...GatsbyImageSharpFluid
            aspectRatio
          }
        }
      }
      igniteDescription: file(
        sourceInstanceName: { eq: "ProgramsCopy" }
        name: { eq: "7DayIgniteResetCard" }
      ) {
        childMarkdownRemark {
          html
        }
      }
    }
  `;

  const data = useStaticQuery(query);
  const mobile = data.igniteResetMobileBackground;
  const tablet = data.igniteResetTabletBackground;
  const laptop = data.igniteResetLaptopBackground;
  const body = data.igniteDescription.childMarkdownRemark.html;

  const background = useRenderBackgroundImage(mobile, tablet, laptop, laptop);
  const backgroundReady = useIsBackgroundReady(background);

  const handleButtonClick = () => navigate("/join-a-7-day-reset-program");

  return (
    <CardContainer>
      <CardGrid>
        {backgroundReady ? (
          <IgniteBackground
            fluid={background}
            alt="Kindal doing a squat from a box to help with good from."
            title="A box squat to help with proper form."
          />
        ) : (
          <BackgroundImageLoader />
        )}
        <ContentContainer>
          <LogoDescriptionWrapper>
            <IgniteResetLogo />
            <SetBodyText
              setFontSize={"14"}
              setMobileMarginTop={12}
              dangerouslySetInnerHTML={{ __html: body }}
            />
          </LogoDescriptionWrapper>
          <ElementContainer>
            <BaseButton handleClick={handleButtonClick}>
              Join The Reset for FREE!
            </BaseButton>
          </ElementContainer>
        </ContentContainer>
      </CardGrid>
    </CardContainer>
  );
};

export default IgniteResetCard;

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
  padding: 60px 16px 30px 16px;
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

const IgniteBackground = styled(Image)`
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

const IgniteResetLogo = styled(Logo)`
  width: 100%;
`;

const LogoDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
