import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { ElementContainer } from "../../../../../styles/Containers";
import { SetBodyText } from "../../../../../styles/BodyText";

const Reason2Lead = () => {
  const query = graphql`
    query {
      file(
        sourceInstanceName: { eq: "WhatWeDoCopy" }
        name: { eq: "Reason2Lead" }
      ) {
        childMarkdownRemark {
          html
        }
      }
    }
  `;

  const copy = useStaticQuery(query);
  const body = copy.file.childMarkdownRemark.html;

  return (
    <ElementContainer setMobileMarginTop={40}>
      <SetBodyText dangerouslySetInnerHTML={{ __html: body }} />
    </ElementContainer>
  );
};

export default Reason2Lead;
