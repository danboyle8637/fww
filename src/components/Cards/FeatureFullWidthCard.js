import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import styled from "styled-components";

import SevenDayResetCardContent from "./CardContent/SevenDayResetCardContent";
import { above } from "../../styles/Theme";

const FeatureFullWidthCard = () => {
  const query = graphql`
    query {
      sevenDayCard: file(
        sourceInstanceName: { eq: "7DayResetImages" }
        name: { eq: "7-day-reset-squat-banner-575x450" }
      ) {
        childImageSharp {
          fluid(
            maxWidth: 575
            maxHeight: 450
            jpegProgressive: true
            quality: 90
          ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `;

  const image = useStaticQuery(query);
  const fluid = image.sevenDayCard.childImageSharp.fluid;

  return (
    <CardContainer>
      <ResetBackground fluid={fluid} />
      <ContentWrapper>
        <SevenDayResetCardContent />
      </ContentWrapper>
    </CardContainer>
  );
};

export default FeatureFullWidthCard;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  background: #000;
  border-top: 6px solid ${props => props.theme.mainBackgroundBorderColor};
  overflow: hidden;
  width: 100%;
  ${above.ipadPro`
    margin: 0 0 100px 0;
    align-self: center;
    width: 1200px;
    border: 6px solid ${props => props.theme.mainBackgroundBorderColor};
    border-radius: 10px;
  `}
`;

const ResetBackground = styled(Image)`
  margin: 400px 0 0 0;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  width: 500px;
  align-self: end;
  ${above.mobile`
    margin: 0;
    justify-self: start;
  `}
  ${above.tablet`
    width: 575px;
  `}
`;

const ContentWrapper = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  z-index: 1;
  width: 360px;
  ${above.mobile`
    margin: 0 0 80px 0;
    justify-self: end;
    align-self: center;
    width: 420px;
  `}
  ${above.tablet`
    margin: 0 200px 80px 0;
  `}
  ${above.ipadPro`
    margin: 0 120px 0 0;
    justify-self: end;
    width: 600px;
  `}
`;
