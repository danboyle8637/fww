import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";

import { ElementContainer } from "../../../styles/Containers";
import { SetBodyText } from "../../../styles/BodyText";
import { InnerButton } from "../../../styles/Buttons";
import Logo from "../../../svgs/BodyBurnChallengesLogo";
import useRenderBackgroundImage from "../../../hooks/useRenderBackgroundImage";
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
            aspectRatio
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
            aspectRatio
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
            aspectRatio
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

  const background = useRenderBackgroundImage(mobile, tablet, laptop);

  return (
    <CardGrid>
      <BBCBackground fluid={background} />
      <ContentContainer>
        <LogoDescriptionWrapper>
          <BBCLogo />
          <SetBodyText
            setMobileMarginTop={20}
            dangerouslySetInnerHTML={{ __html: body }}
          />
        </LogoDescriptionWrapper>
        <ElementContainer>
          <InnerButton to={"/body-burn-challenges"}>
            Learn More About BBC
          </InnerButton>
        </ElementContainer>
      </ContentContainer>
    </CardGrid>
  );
};

export default BBCCard;

const CardGrid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  background: ${props => props.theme.mainBackgroundBorderColor};
  border-radius: 6px;
  overflow: hidden;
  ${above.mobile`
    margin: 0 0 40px 0;
  `}
`;

const ContentContainer = styled.div`
  padding: 70px 16px 40px 16px;
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
  border-radius: 0;
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
