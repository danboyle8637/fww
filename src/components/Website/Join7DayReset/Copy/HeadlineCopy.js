import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { ElementContainer } from "../../../../styles/Containers";
import { SetBodyText } from "../../../../styles/BodyText";

const HeadlineCopy = () => {
  const query = graphql`
    query {
      resetHeadlineCTA: file(
        sourceInstanceName: { eq: "7DayResetCopy" }
        name: { eq: "HeadlineCopy" }
      ) {
        childMarkdownRemark {
          html
        }
      }
    }
  `;

  const copy = useStaticQuery(query);
  const body = copy.resetHeadlineCTA.childMarkdownRemark.html;

  return (
    <ElementContainer setMobileMarginTop={20} setMobileWidth={"60%"}>
      <SetBodyText dangerouslySetInnerHTML={{ __html: body }} />
    </ElementContainer>
  );
};

export default HeadlineCopy;
