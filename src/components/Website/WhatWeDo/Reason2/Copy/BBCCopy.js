import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { ElementContainer } from "../../../../../styles/Containers";
import { Header3 } from "../../../../../styles/Headlines";
import { SetBodyText } from "../../../../../styles/BodyText";

const BBCCopy = () => {
  const query = graphql`
    query {
      file(
        sourceInstanceName: { eq: "WhatWeDoCopy" }
        name: { eq: "Reason2BBC" }
      ) {
        childMarkdownRemark {
          html
          frontmatter {
            headline
          }
        }
      }
    }
  `;

  const copy = useStaticQuery(query);
  const headline = copy.file.childMarkdownRemark.frontmatter.headline;
  const body = copy.file.childMarkdownRemark.html;

  return (
    <ElementContainer column setMobileMarginTop={20}>
      <Header3 primary mobileMedium setMLineHeight={1.4}>
        {headline}
      </Header3>
      <SetBodyText dangerouslySetInnerHTML={{ __html: body }} />
    </ElementContainer>
  );
};

export default BBCCopy;
