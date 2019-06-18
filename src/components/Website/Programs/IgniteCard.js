import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";

import { ElementContainer } from "../../../styles/Containers";
import { SetBodyText } from "../../../styles/BodyText";
import { InnerButton } from "../../../styles/Buttons";
import Logo from "../../../svgs/IgniteLogo";
import useRenderBackgroundImage from "../../../hooks/useRenderBackgroundImage";
import { above } from "../../../styles/Theme";

const IgniteProgramCard = () => {
  const query = graphql`
    query {
      igniteMobileBackground: file(
        sourceInstanceName: { eq: "ProgramImages" }
        name: { eq: "ignite-box-pushup-600x1300" }
      ) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 1300, quality: 90) {
            ...GatsbyImageSharpFluid
            aspectRatio
          }
        }
      }
      igniteTabletBackground: file(
        sourceInstanceName: { eq: "ProgramImages" }
        name: { eq: "ignite-box-pushup-864x600" }
      ) {
        childImageSharp {
          fluid(maxWidth: 864, maxHeight: 600, quality: 90) {
            ...GatsbyImageSharpFluid
            aspectRatio
          }
        }
      }
      igniteLaptopBackground: file(
        sourceInstanceName: { eq: "ProgramImages" }
        name: { eq: "ignite-box-pushup-864x420" }
      ) {
        childImageSharp {
          fluid(maxWidth: 864, maxHeight: 420, quality: 90) {
            ...GatsbyImageSharpFluid
            aspectRatio
          }
        }
      }
      igniteDescription: file(
        sourceInstanceName: { eq: "IgniteCopy" }
        name: { eq: "IgniteHeadline" }
      ) {
        childMarkdownRemark {
          html
        }
      }
    }
  `;

  const data = useStaticQuery(query);
  const mobile = data.igniteMobileBackground;
  const tablet = data.igniteTabletBackground;
  const laptop = data.igniteLaptopBackground;
  const body = data.igniteDescription.childMarkdownRemark.html;

  const background = useRenderBackgroundImage(mobile, tablet, laptop);

  return (
    <CardGrid>
      <IgniteBackground fluid={background} />
      <ContentContainer>
        <LogoDescriptionWrapper>
          <IgniteLogo />
          <SetBodyText
            setMobileMarginTop={12}
            dangerouslySetInnerHTML={{ __html: body }}
          />
        </LogoDescriptionWrapper>
        <ElementContainer>
          <InnerButton to={"/ignite-strength-for-beginners"}>
            Learn More About Ignite
          </InnerButton>
        </ElementContainer>
      </ContentContainer>
    </CardGrid>
  );
};

export default IgniteProgramCard;

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
  padding: 20px 16px 40px 16px;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 1;
  ${above.mobile`
    padding: 28px 0 28px 24px;
    width: 50%;
  `}
  ${above.tablet`
    padding: 32px 0 32px 28px;
  `}
`;

const IgniteBackground = styled(Image)`
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

const IgniteLogo = styled(Logo)`
  width: 66%;
  ${above.mobile`
    width: 70%;
  `}
  ${above.tablet`
    width: 50%;
  `}
`;

const LogoDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
