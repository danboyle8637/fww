import React from "react"
import { Link } from "gatsby"

import { ElementContainer, ContentContainer } from "../styles/Containers"
import HeadlineSection from "../components/Website/Home/HeadlineSection"
import SEO from "../components/seo"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <ContentContainer>
      <ElementContainer>
        <HeadlineSection />
        <Link to="/page-2/">Go to page 2</Link>
      </ElementContainer>
    </ContentContainer>
  </>
)

export default IndexPage
