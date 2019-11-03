import React from "react";
import styled from "styled-components";
import Image from "gatsby-image";
import { Link } from "gatsby";

import { SetBodyText } from "../../styles/BodyText";

const HomeCard = ({ headline, body, image, buttonText, slug }) => {
  return (
    <UnstyledLink to={slug}>
      <CardContainer>
        <ImageWrapper>
          <Image fluid={image} />
        </ImageWrapper>
        <ContentWrapper>
          <Header3>{headline}</Header3>
          <SetBodyText
            setMobileMarginTop={12}
            dangerouslySetInnerHTML={{ __html: body }}
          />
          <Button>{buttonText}</Button>
        </ContentWrapper>
      </CardContainer>
    </UnstyledLink>
  );
};

export default HomeCard;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
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
  width: 160px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: flex-start;
  padding: 20px;
`;

const Header3 = styled.h3`
  margin: 0;
  padding: 0;
  font-size: 22px;
  color: ${props => props.theme.headlinePrimary};
  letter-spacing: 0.1rem;
`;

const Button = styled.div`
  margin: 20px 0 0 0;
  padding: 2px 12px;
  align-self: flex-start;
  background: rgba(139, 83, 246, 0.2);
  border: 2px solid #8b53f6;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 400;
  font-size: 14px;
  color: #f8f8f8;
`;

const UnstyledLink = styled(Link)`
  text-decoration: none;
`;
