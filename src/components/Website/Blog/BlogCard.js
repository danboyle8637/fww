import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Image from "gatsby-image";
import TimelineMax from "gsap/TimelineMax";
import { TweenMax } from "gsap/TweenMax";

import { ElementContainer } from "../../../styles/Containers";
import { BlogButton } from "../../../styles/Buttons";
import BlogMoreIcon from "../../../svgs/BlogMoreIcon";
// import useIsBackgroundReady from "../../../hooks/useIsBackgroundReady";
// import BackgroundImageLoader from "../../Shared/BackgroundImageLoader";
import "./Blog.css";

const BlogCard = ({
  featureImage,
  altText,
  headline,
  teaserCopy,
  buttonText,
  tags,
  slug,
}) => {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const [cardDetailsHeight, setCardDetailsHeight] = useState(0);
  //const cardContainerRef = useRef(null);
  const cardDescriptoinWrapperRef = useRef(null);
  const cardControlsRef = useRef(null);
  const headlineRef = useRef(null);
  const descriptionRef = useRef(null);
  const tagsRef = useRef(null);
  const descriptionButtonRef = useRef(null);
  const controlsButtonRef = useRef(null);
  const detailsTimeLine = useRef(new TimelineMax({ paused: true }));

  useEffect(() => {
    const cardDescription = cardDescriptoinWrapperRef.current;
    const cardControls = cardControlsRef.current;
    const headline = headlineRef.current;
    const description = descriptionRef.current;
    const tags = tagsRef.current;
    const descriptionButton = descriptionButtonRef.current;
    const controlsButton = controlsButtonRef.current;
    const descriptionHeight = cardDescription.clientHeight;
    setCardDetailsHeight(descriptionHeight);

    TweenMax.set(cardDescription, { transformOrigin: "50% 0%", scaleY: 0 });
    TweenMax.set(cardControls, { y: -descriptionHeight });
    TweenMax.set(controlsButton, { x: 0, autoAlpha: 1 });
    TweenMax.set([headline, description, tags, descriptionButton], {
      y: -20,
      autoAlpha: 0,
    });

    const detailsTL = detailsTimeLine.current;

    detailsTL
      .to(cardDescription, 0.3, {
        scaleY: 1,
      })
      .to(
        cardControls,
        0.3,
        {
          y: 0,
        },
        "-=0.3"
      )
      .to(
        controlsButton,
        0.4,
        {
          x: -200,
          autoAlpha: 0,
        },
        "-=0.3"
      )
      .staggerTo(
        [headline, description, tags, descriptionButton],
        0.5,
        {
          y: 0,
          autoAlpha: 1,
        },
        0.08
      );

    if (detailsOpen) {
      detailsTL.play(0);
    } else {
      detailsTL.reverse(1);
    }

    return () => {
      detailsTL.clear(true);
      detailsTL.kill();
    };
  }, [detailsOpen]);

  const handleDetailsClick = () => {
    setDetailsOpen(!detailsOpen);
  };

  const tagList = tags.map(tag => (
    <BlogTags key={tag.title}>{tag.title}</BlogTags>
  ));

  return (
    <BlogCardContainer>
      <FeatureImage alt={altText} fluid={featureImage} />
      <ContentWrapper ref={cardDescriptoinWrapperRef}>
        <BlogCardHeadline ref={headlineRef}>{headline}</BlogCardHeadline>
        <BlogDescription
          ref={descriptionRef}
          dangerouslySetInnerHTML={{ __html: teaserCopy }}
        />
        <TagWrapper ref={tagsRef}>{tagList}</TagWrapper>
        <ElementContainer ref={descriptionButtonRef} justifyCenter>
          <BlogButton to={`/blog/${slug}`}>{buttonText}</BlogButton>
        </ElementContainer>
      </ContentWrapper>
      <ControlsContainer
        ref={cardControlsRef}
        initialHeight={cardDetailsHeight}
      >
        <BlogButton ref={controlsButtonRef} to={`/blog/${slug}`}>
          Read Post
        </BlogButton>
        <OpenCloseWrapper onClick={handleDetailsClick}>
          <MoreCloseLabel>{detailsOpen ? "Close" : "Details"}</MoreCloseLabel>
          <MoreAndCloseIcon detailsOpen={detailsOpen} />
        </OpenCloseWrapper>
      </ControlsContainer>
    </BlogCardContainer>
  );
};

export default BlogCard;

const BlogCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const FeatureImage = styled(Image)`
  width: 100%;
  border-radius: 6px 6px 0 0;
`;

const ContentWrapper = styled.div`
  padding: 12px 12px 0 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: ${props => props.theme.bodyText};
`;

const BlogCardHeadline = styled.h2`
  margin: 0;
  padding: 0;
  font-weight: 800;
  font-size: 22px;
  color: ${props => props.theme.mainBackgroundColor};
  text-transform: uppercase;
  letter-spacing: 1.2px;
`;

const BlogDescription = styled.div`
  margin: 12px 0 0 0;
  padding: 0;
  font-size: 14px;
  color: ${props => props.theme.mainBackgroundColor};
`;

const TagWrapper = styled.div`
  margin: 18px 0 26px 0;
  display: grid;
  grid-template-columns: repeat(5, auto);
  grid-template-rows: 1fr;
  gap: 10px;
  justify-content: start;
  width: 100%;
`;

const BlogTags = styled.p`
  margin: 0;
  padding: 2px 8px;
  justify-self: center;
  font-size: 13px;
  background: rgba(25, 25, 28, 0.3);
  border-radius: 25px;
  color: ${props => props.theme.whiteText};
`;

// Blog Card controls section at bottom

const ControlsContainer = styled.div`
  padding: 8px 20px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  align-items: center;
  background: ${props => props.theme.bodyText};
  border-radius: 0 0 6px 6px;
  width: 100%;
  overflow: hidden;
`;

const OpenCloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

const MoreCloseLabel = styled.p`
  margin: 0 8px 0 0;
  padding: 0;
  font-size: 14px;
  color: ${props => props.theme.mainBackgroundColor};
  text-transform: uppercase;
`;

const MoreAndCloseIcon = styled(BlogMoreIcon)`
  width: 60px;
`;
