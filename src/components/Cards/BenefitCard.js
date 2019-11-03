import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import Image from "gatsby-image";

import { SetBodyText } from "../../styles/BodyText";

const BenefitCard = ({
  headline,
  description,
  image,
  buttonText,
  path,
  cardId,
}) => {
  return (
    <UnstyledLink to={path}>
      <CardContainer>
        <ImageWrapper>
          <BackgroundImage fluid={image} />
          <HeadlineWrapper cardId={cardId}>
            <Header3>{headline}</Header3>
          </HeadlineWrapper>
        </ImageWrapper>
        <ContentWrapper>
          <SetBodyText
            setMobileMarginTop={12}
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <Button>{buttonText}</Button>
        </ContentWrapper>
      </CardContainer>
    </UnstyledLink>
  );
};

export default BenefitCard;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  align-items: center;
  background-color: ${props => props.theme.mainBackgroundBorderColor};
  max-width: 500px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 6px 12px -4px rgba(0, 0, 0, 0.4);
  transition: box-shadow 300ms ease-in-out;
  &:hover {
    box-shadow: 0px 0px 0px 3px ${props => props.theme.primaryAccent};
  }
`;

const ImageWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  width: 100%;
`;

const BackgroundImage = styled(Image)`
  margin: 0;
  padding: 0;
  grid-column: 1 / -1;
  grid-row: 1 / -1;
`;

const HeadlineWrapper = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  padding: 20px;
  justify-self: ${props => (props.cardId === "reason3_card" ? "end" : "start")};
  align-self: center;
  width: 60%;
  z-index: 2;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  padding: 20px;
`;

const Header3 = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 28px;
  color: ${props => props.theme.headlinePrimary};
  letter-spacing: 0.1rem;
`;

const Button = styled.div`
  margin: 0;
  padding: 8px 12px;
  background: ${props => props.theme.primaryAccent};
  border-radius: 6px;
  text-decoration: none;
  text-align: center;
  color: ${props => props.theme.mainBackgroundColor};
  font-family: Montserrat, sans-serif;
  text-transform: uppercase;
  font-weight: 800;
  width: 100%;
  max-width: 600px;
  cursor: pointer;
`;

const UnstyledLink = styled(Link)`
  text-decoration: none;
`;
