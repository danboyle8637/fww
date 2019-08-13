import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";

import { ElementContainer } from "../../../styles/Containers";
import { SetBodyText } from "../../../styles/BodyText";
import { InnerButton } from "../../../styles/Buttons";
import Logo from "../../../svgs/StrongLogo";
import useRenderBackgroundImage from "../../../hooks/useRenderBackgroundImage";
import useIsBackgroundReady from "../../../hooks/useIsBackgroundReady";
import BackgroundImageLoader from "../../Shared/BackgroundImageLoader";
import { above } from "../../../styles/Theme";

const StrongCard = () => {
  const query = graphql`
    query {
      strongMobileBackground: file(
        sourceInstanceName: { eq: "ProgramImages" }
        name: { eq: "strong-half-getup-600x1300" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 1300, quality: 90) {
            ...GatsbyImageSharpFluid
            aspectRatio
          }
        }
      }
      strongTabletBackground: file(
        sourceInstanceName: { eq: "ProgramImages" }
        name: { eq: "strong-half-getup-864x600" }
      ) {
        childImageSharp {
          fluid(maxWidth: 864, maxHeight: 600, quality: 90) {
            ...GatsbyImageSharpFluid
            aspectRatio
          }
        }
      }
      strongLaptopBackground: file(
        sourceInstanceName: { eq: "ProgramImages" }
        name: { eq: "strong-half-getup-864x420" }
      ) {
        childImageSharp {
          fluid(maxWidth: 864, maxHeight: 420, quality: 90) {
            ...GatsbyImageSharpFluid
            aspectRatio
          }
        }
      }
      strongDescription: file(
        sourceInstanceName: { eq: "StrongCopy" }
        name: { eq: "StrongHeadline" }
      ) {
        childMarkdownRemark {
          html
        }
      }
    }
  `;

  const data = useStaticQuery(query);
  const mobile = data.strongMobileBackground;
  const tablet = data.strongTabletBackground;
  const laptop = data.strongLaptopBackground;
  const body = data.strongDescription.childMarkdownRemark.html;

  const background = useRenderBackgroundImage(mobile, tablet, laptop, laptop);
  const backgroundReady = useIsBackgroundReady(background);

  return (
    <CardContainer>
      <CardGrid>
        {backgroundReady ? (
          <StrongBackground fluid={background} />
        ) : (
          <BackgroundImageLoader />
        )}
        <ContentContainer>
          <LogoDescriptionWrapper>
            <StrongLogo />
            <ElementContainer setMobileWidth={"50%"}>
              <SetBodyText
                setFontSize={"14px"}
                dangerouslySetInnerHTML={{ __html: body }}
              />
            </ElementContainer>
          </LogoDescriptionWrapper>
          <ElementContainer>
            <InnerButton to={"/strong-kettlebell-training"}>
              Learn More About Strong
            </InnerButton>
          </ElementContainer>
        </ContentContainer>
      </CardGrid>
    </CardContainer>
  );
};

export default StrongCard;

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
  box-shadow: 0px 6px 3px 3px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  ${above.mobile`
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
    padding: 50px 0 28px 24px;
    width: 50%;
  `}
  ${above.tablet`
    padding: 50px 0 32px 28px;
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

const StrongLogo = styled(Logo)`
  width: 100%;
`;

const LogoDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
