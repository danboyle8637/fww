import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { ElementContainer } from "../../../../styles/Containers";
import { SetBodyText } from "../../../../styles/BodyText";

const BenefitsBullets2 = () => {
  const query = graphql`
    query {
      bbcBullets: file(
        sourceInstanceName: { eq: "IgniteCopy" }
        name: { eq: "IgniteBenefits2" }
      ) {
        childMarkdownRemark {
          html
        }
      }
    }
  `;

  const copy = useStaticQuery(query);
  const bullets = copy.bbcBullets.childMarkdownRemark.html;

  return (
    <ElementContainer>
      <SetBodyText dangerouslySetInnerHTML={{ __html: bullets }} />
    </ElementContainer>
  );
};

export default BenefitsBullets2;
