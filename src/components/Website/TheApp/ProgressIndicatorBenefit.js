import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";

import IphoneX from "../../../svgs/IphoneX";
import BenefitCard from "./BenefitCard";
import { Header4 } from "../../../styles/Headlines";
import { above } from "../../../styles/Theme";

const ProgressIndicatorBenefit = () => {
  const query = graphql`
    query {
      progressBenefit: file(
        sourceInstanceName: { eq: "TheAppCopy" }
        name: { eq: "BenefitCard3" }
      ) {
        childMarkdownRemark {
          html
          frontmatter {
            icon
            topHeadline
            bottomHeadline
          }
        }
      }
    }
  `;

  const benefit = useStaticQuery(query);
  const benefit3Icon =
    benefit.progressBenefit.childMarkdownRemark.frontmatter.icon;
  const benefit3TopHeadline =
    benefit.progressBenefit.childMarkdownRemark.frontmatter.topHeadline;
  const benefit3BottomHeadline =
    benefit.progressBenefit.childMarkdownRemark.frontmatter.bottomHeadline;
  const benefit3Body = benefit.progressBenefit.childMarkdownRemark.html;

  const [percentComplete, setPercentComplete] = useState();

  return (
    <BenefitGrid>
      <Counter>
        <Header4 secondary mobileSmall>
          {percentComplete}%
        </Header4>
      </Counter>
      <BackgroundIphone />
      <BenefitWrapper>
        <BenefitCard
          setPercentComplete={setPercentComplete}
          icon={benefit3Icon}
          topHeadline={benefit3TopHeadline}
          bottomHeadline={benefit3BottomHeadline}
          body={benefit3Body}
          gradientNum={"1"}
          column={true}
        />
      </BenefitWrapper>
    </BenefitGrid>
  );
};

export default ProgressIndicatorBenefit;

const BenefitGrid = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
`;

const BackgroundIphone = styled(IphoneX)`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  justify-self: center;
  align-self: center;
  width: 100%;
`;

const BenefitWrapper = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  justify-self: center;
  align-self: center;
  z-index: 1;
  width: 78%;
`;

const Counter = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  justify-self: center;
  align-self: center;
  transform: translateY(-115px);
  z-index: 3;
  ${above.mobile`
    transform: translateY(-145px);
  `}
  ${above.tablet`
    transform: translateY(-125px);
  `}
  ${above.ipadPro`
    transform: translateY(-130px);
  `}
`;
