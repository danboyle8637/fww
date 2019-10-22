import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { ElementContainer } from "../../../../../styles/Containers";
import { Header3 } from "../../../../../styles/Headlines";
import { SetBodyText } from "../../../../../styles/BodyText";

const StrongCopy = () => {
  const query = graphql`
    query {
      file(
        sourceInstanceName: { eq: "WhatWeDoCopy" }
        name: { eq: "Reason2Strong" }
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
  const body = copy.file.childMarkdownRemark.html;

  return (
    <ElementContainer column setMobileMarginTop={5}>
      <SetBodyText
        setMobileMarginTop={12}
        dangerouslySetInnerHTML={{ __html: body }}
      />
    </ElementContainer>
  );
};

export default StrongCopy;
