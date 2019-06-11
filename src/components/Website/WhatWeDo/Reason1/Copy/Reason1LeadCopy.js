import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { SetBodyText } from "../../../../../styles/BodyText"

const Reason1LeadCopy = () => {
  const query = graphql`
    query {
      file(
        sourceInstanceName: { eq: "WhatWeDoCopy" }
        name: { eq: "Reason1Lead" }
      ) {
        childMarkdownRemark {
          html
        }
      }
    }
  `

  const copy = useStaticQuery(query)
  const body = copy.file.childMarkdownRemark.html

  return <SetBodyText dangerouslySetInnerHTML={{ __html: body }} />
}

export default Reason1LeadCopy
