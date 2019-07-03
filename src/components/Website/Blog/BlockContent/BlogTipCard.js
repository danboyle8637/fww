import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BaseBlockContent from "@sanity/block-content-to-react";

import BlogNormalText from "./BlogNormalText";
import BlogFormTipIcon from "../../../../svgs/BlogFormTipIcon";
import BlogIntensityIcon from "../../../../svgs/BlogIntensityIcon";
import BlogNutritionIcon from "../../../../svgs/BlogNutritionIcon";
import { above } from "../../../../styles/Theme";

const serializers = {
  types: {
    block: props => {
      return <BlogNormalText>{props.children}</BlogNormalText>;
    },
  },
};

const BlogTipCard = ({ type, headline, tipBody }) => {
  const [icon, setIcon] = useState();
  const [tipType, setTipType] = useState("");

  useEffect(() => {
    if (!type) {
      throw new Error("I need a tip type to show a tip.");
    }

    if (type === "formTip") {
      setIcon(<FormTipIcon />);
      setTipType("Form Tip");
    }

    if (type === "intensityTip") {
      setIcon(<IntensityTipIcon />);
      setTipType("Intensity Tip");
    }

    if (type === "nutritionTip") {
      setIcon(<NutritionTipIcon />);
      setTipType("Nutrition Tip");
    }
  }, [type]);

  return (
    <BlogTipContainer>
      <TipTypeWrapper>
        {icon}
        <TipType>{tipType}</TipType>
      </TipTypeWrapper>
      <TipBodyWrapper>
        <TipHeadline>{headline}</TipHeadline>
        <BaseBlockContent blocks={tipBody} serializers={serializers} />
      </TipBodyWrapper>
    </BlogTipContainer>
  );
};

export default BlogTipCard;

const BlogTipContainer = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: ${props => props.theme.mainBackgroundBorderColor};
  border-radius: 6px;
  width: 100%;
  max-width: 43rem;
`;

const TipTypeWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
`;

const FormTipIcon = styled(BlogFormTipIcon)`
  width: 76px;
`;

const IntensityTipIcon = styled(BlogIntensityIcon)`
  width: 28px;
`;

const NutritionTipIcon = styled(BlogNutritionIcon)`
  width: 54px;
`;

const TipType = styled.h4`
  margin: 0 0 0 12px;
  padding: 0;
  font-size: 32px;
  text-transform: uppercase;
  color: ${props => props.theme.bodyText};
`;

const TipBodyWrapper = styled.div`
  margin: 20px 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const TipHeadline = styled.h4`
  margin: 0;
  padding: 0;
  font-size: 28px;
  text-transform: uppercase;
  color: ${props => props.theme.headlineSecondary};
`;
