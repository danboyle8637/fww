import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import { SectionContainer } from "../../../../styles/Containers";
import Headline1 from "./Headlines/Headline1";
import ReasonCard from "./ReasonCard";
import DraggableRow from "../../../../Animations/Tweens/DraggableRow";
import SwipeDot from "../../../../svgs/SwipeDot";
import { useIsTweeningContext } from "../../../../context/IsTweeningContent";
import DismissSwipeIcon from "../../../../Animations/ReactTransitions/DismissSwipeIcon";

const ReasonSection = () => {
  // eslint-disable-next-line
  const [{ isTweening }, dispatch] = useIsTweeningContext();

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
      <SwipeWrapper>
        <DismissSwipeIcon isTweening={isTweening}>
          <Swipe />
        </DismissSwipeIcon>
      </SwipeWrapper>
      <DraggableRow numberOfCards={3}>{cards}</DraggableRow>
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
