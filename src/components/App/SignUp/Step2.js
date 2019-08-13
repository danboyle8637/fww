import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import { ElementContainer } from "../../../styles/Containers";
import { BodyText } from "../../../styles/BodyText";
import { InnerButton } from "../../../styles/Buttons";
import InscrutionCard from "../Shared/InstructionCard";

const Step2 = () => {
  const query = graphql`
    query {
      signUpStep2: file(
        sourceInstanceName: { eq: "AppCopy" }
        name: { eq: "SignUpStep2" }
      ) {
        childMarkdownRemark {
          html
        }
      }
    }
  `;

  const copy = useStaticQuery(query);
  const instructions = copy.signUpStep2.childMarkdownRemark.html;

  return;
};

export default Step2;
