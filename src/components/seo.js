import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";
import Montserrat from "typeface-montserrat";
import Quicksand from "typeface-quicksand";

const SEO = ({
  pageTitle,
  description,
  fbTitle,
  url,
  image = null,
  blogAuthor,
}) => {
  const query = graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `;

  const data = useStaticQuery(query);

  const author = blogAuthor || data.site.siteMetadata.author;
  const isBlogPost = false;

  return (
    <Helmet>
      <meta charset="utf-8" />
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <meta name="author" content={author} />
      <link rel="canonical" href={url} />

      {/* Facebook Tags */}
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fbTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content={"1200px"} />
      <meta property="og:image:height" content={"630px"} />
      <meta property="og:app_id" content={"1545868855673667"} />
      {isBlogPost ? (
        <meta property="og:type" content={"article"} />
      ) : (
        <meta property="og:type" content={"website"} />
      )}
      <link href={Montserrat} rel="preload" as="font" type="font/woff2" />
      <link href={Quicksand} rel="preload" as="font" type="font/woff2" />
    </Helmet>
  );
};

export default SEO;
