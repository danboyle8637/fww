import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { ElementContainer } from "../../../../styles/Containers";
import { SetBodyText } from "../../../../styles/BodyText";

const WorkoutsCopy = () => {
  const query = graphql`
    query {
      headlineCopy: file(
        sourceInstanceName: { eq: "StrongCopy" }
        name: { eq: "StrongWorkouts" }
      ) {
        childMarkdownRemark {
          html
        }
      }
    }
  `;

  const copy = useStaticQuery(query);
  const body = copy.headlineCopy.childMarkdownRemark.html;

  return (
    <ElementContainer setMobileMarginTop={40} setLaptopMarginTop={60}>
      <SetBodyText setPadding dangerouslySetInnerHTML={{ __html: body }} />
    </ElementContainer>
  );
};

export default WorkoutsCopy;
