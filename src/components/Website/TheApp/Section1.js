import React from "react";
import styled from "styled-components";
import { useStaticQuery, graphql } from "gatsby";

import { SectionContainer, ContentContainer } from "../../../styles/Containers";
import { SectionGrid } from "../../../styles/GridContainer";
import IphoneX from "../../../svgs/IphoneX";
import BenefitCard from "./BenefitCard";
import { above } from "../../../styles/Theme";

const Section1 = () => {
  const query = graphql`
    query {
      benefit1: file(
        sourceInstanceName: { eq: "TheAppCopy" }
        name: { eq: "BenefitCard1" }
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
      benefit2: file(
        sourceInstanceName: { eq: "TheAppCopy" }
        name: { eq: "BenefitCard2" }
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
      benefit3: file(
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
      benefit4: file(
        sourceInstanceName: { eq: "TheAppCopy" }
        name: { eq: "BenefitCard4" }
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

  const data = useStaticQuery(query);
  const benefit1Icon = data.benefit1.childMarkdownRemark.frontmatter.icon;
  const benefit1TopHeadline =
    data.benefit1.childMarkdownRemark.frontmatter.topHeadline;
  const benefit1BottomHeadline =
    data.benefit1.childMarkdownRemark.frontmatter.bottomHeadline;
  const benefit1Body = data.benefit1.childMarkdownRemark.html;

  const benefit2Icon = data.benefit2.childMarkdownRemark.frontmatter.icon;
  const benefit2TopHeadline =
    data.benefit2.childMarkdownRemark.frontmatter.topHeadline;
  const benefit2BottomHeadline =
    data.benefit2.childMarkdownRemark.frontmatter.bottomHeadline;
  const benefit2Body = data.benefit2.childMarkdownRemark.html;

  const benefit3Icon = data.benefit3.childMarkdownRemark.frontmatter.icon;
  const benefit3TopHeadline =
    data.benefit3.childMarkdownRemark.frontmatter.topHeadline;
  const benefit3BottomHeadline =
    data.benefit3.childMarkdownRemark.frontmatter.bottomHeadline;
  const benefit3Body = data.benefit3.childMarkdownRemark.html;

  const benefit4Icon = data.benefit4.childMarkdownRemark.frontmatter.icon;
  const benefit4TopHeadline =
    data.benefit4.childMarkdownRemark.frontmatter.topHeadline;
  const benefit4BottomHeadline =
    data.benefit4.childMarkdownRemark.frontmatter.bottomHeadline;
  const benefit4Body = data.benefit4.childMarkdownRemark.html;

  return (
    <SectionContainer>
      <ContentContainer>
        <CardContainer>
          <BenefitWrapper1>
            <BenefitCard
              icon={benefit1Icon}
              topHeadline={benefit1TopHeadline}
              bottomHeadline={benefit1BottomHeadline}
              body={benefit1Body}
            />
            <BenefitCard
              icon={benefit2Icon}
              topHeadline={benefit2TopHeadline}
              bottomHeadline={benefit2BottomHeadline}
              body={benefit2Body}
            />
          </BenefitWrapper1>
          <GridWrapper>
            <SectionGrid>
              <BackgroundIphoneX />
              <BenefitWrapper2>
                <BenefitCard
                  icon={benefit3Icon}
                  topHeadline={benefit3TopHeadline}
                  bottomHeadline={benefit3BottomHeadline}
                  body={benefit3Body}
                  gradientId={"progressSec1"}
                  column={true}
                />
              </BenefitWrapper2>
            </SectionGrid>
          </GridWrapper>
          <BenefitWrapper3>
            <BenefitCard
              icon={benefit4Icon}
              topHeadline={benefit4TopHeadline}
              bottomHeadline={benefit4BottomHeadline}
              body={benefit4Body}
            />
          </BenefitWrapper3>
        </CardContainer>
      </ContentContainer>
    </SectionContainer>
  );
};

export default Section1;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const BenefitWrapper1 = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 20px;
  width: 100%;
  ${above.mobile`
    width: 652px;
  `}
`;

const BenefitWrapper2 = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  justify-self: center;
  align-self: center;
  z-index: 1;
`;

const BenefitWrapper3 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${above.mobile`
    width: 652px;
  `}
`;

const GridWrapper = styled.div`
  margin: 80px 0;
`;

const BackgroundIphoneX = styled(IphoneX)`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  justify-self: center;
  width: 100%;
  ${above.mobile`
    width: 426px;
  `}
`;
