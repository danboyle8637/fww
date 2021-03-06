import React from "react";
import BaseBlockContent from "@sanity/block-content-to-react";

import serializers from "./BlockContentSerializer";

const BlogBlockContent = ({ blocks }) => {
  return <BaseBlockContent blocks={blocks} serializers={serializers} />;
};

export default BlogBlockContent;
