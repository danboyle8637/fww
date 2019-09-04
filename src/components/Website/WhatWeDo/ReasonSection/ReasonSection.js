import React, { useContext, useEffect } from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import {
  SectionContainer,
  ElementContainer,
} from "../../../../styles/Containers";
import Headline1 from "./Headlines/Headline1";
import ReasonCard from "./ReasonCard";
import DraggableRow from "../../../../Animations/Tweens/DraggableRow";
import SwipeDot from "../../../../svgs/SwipeDot";
import LocationDot from "../../../Shared/LocationDot";
import { useIsTweeningContext } from "../../../../context/IsTweeningContext";
import DismissSwipeIcon from "../../../../Animations/ReactTransitions/DismissSwipeIcon";
import { useActiveCardContext } from "../../../../context/ActiveSlideContext";
import ScreenWidthContext from "../../../../context/ScreenWidthContext";

const ReasonSection = () => {
  // eslint-disable-next-line
  const [{ isTweening }, dispatch] = useIsTweeningContext();
  // eslint-disable-next-line
  const [{ activeCard }, dispatch2] = useActiveCardContext();
  const device = useContext(ScreenWidthContext);

  useEffect(() => {
    dispatch2({ type: "setActiveCard", value: 1 });
  }, [dispatch2]);

  const query = graphql`
    query {
      reasonCards: allFile(
        filter: {
          sourceInstanceName: { eq: "WhatWeDoCopy" }
          name: { regex: "/[1-3]Card/" }
        }
        sort: { fields: birthTime }
      ) {
        nodes {
          id
          childMarkdownRemark {
            html
            frontmatter {
              headline
              buttonText
              path
            }
          }
        }
      }
    }
  `;

  const data = useStaticQuery(query);

  const cards = data.reasonCards.nodes.map(card => {
    const id = card.id;
    const headlineId = card.childMarkdownRemark.frontmatter.headline;
    const buttonText = card.childMarkdownRemark.frontmatter.buttonText;
    const path = card.childMarkdownRemark.frontmatter.path;
    const body = card.childMarkdownRemark.html;

    return (
      <ReasonCard
        key={id}
        headlineId={headlineId}
        buttonText={buttonText}
        path={path}
        body={body}
      />
    );
  });

  return (
    <SectionContainer>
      <Headline1 />
      {device === "laptop" || device === "ultraWide" ? (
        <>
          <SwipeWrapper />
          <LaptopCardWrapper>{cards}</LaptopCardWrapper>
        </>
      ) : (
        <>
          <SwipeWrapper>
            <DismissSwipeIcon isTweening={isTweening}>
              <Swipe />
            </DismissSwipeIcon>
          </SwipeWrapper>
          <DraggableRow numberOfCards={3}>{cards}</DraggableRow>
          <ElementContainer justifyCenter setMobileMarginTop={40}>
            <LocationDot active={activeCard >= 1 ? true : false} />
            <LocationDot active={activeCard === 0 ? true : false} />
            <LocationDot active={activeCard <= -1 ? true : false} />
          </ElementContainer>
        </>
      )}
    </SectionContainer>
  );
};

export default ReasonSection;

const SwipeWrapper = styled.div`
  margin: 20px 0 0 0;
  height: 60px;
`;

const Swipe = styled(SwipeDot)`
  width: 140px;
`;

const LaptopCardWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;
