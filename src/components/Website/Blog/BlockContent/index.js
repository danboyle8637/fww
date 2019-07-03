import React from "react";
import BaseBlockContent from "@sanity/block-content-to-react";
import { getFluidGatsbyImage } from "gatsby-source-sanity";

import PrimarySubhead from "./PrimarySubhead";
import SecondarySubhead from "./SecondarySubhead";
import ListSubhead from "./ListSubhead";
import BlogNormalText from "./BlogNormalText";
import BlogTipCard from "./BlogTipCard";
import UnorderedListItem from "./UnorderedListItem";
import BlogStrongText from "./BlogStrongText";

const sanityConfig = {
  projectId: process.env.SANITY_PROJECTID,
  dataset: process.env.SANITY_DATASET,
};

const serializers = {
  types: {
    block: props => {
      switch (props.node.style) {
        case "primarySubhead": {
          return <PrimarySubhead>{props.children}</PrimarySubhead>;
        }
        case "secondarySubhead": {
          return <SecondarySubhead>{props.children}</SecondarySubhead>;
        }
        case "listSubhead": {
          return <ListSubhead>{props.children}</ListSubhead>;
        }
        case "blockQuote": {
          // TODO: Build out how you want your blockquotes to be
        }
        case "normal": {
          return <BlogNormalText>{props.children}</BlogNormalText>;
        }
        default: {
          return <BlogNormalText>{props.children}</BlogNormalText>;
        }
      }
    },
    list: props => {},
    listItem: props => {
      switch (props.node.listItem) {
        case "bullet": {
          return <UnorderedListItem>{props.children}</UnorderedListItem>;
        }
      }
    },
    marks: {
      strong: props => {
        // This might be props.text
        return <StrongText>{props.children}</StrongText>;
      },
    },
    detailedImage: props => {
      const imageAssetId = props.node.asset._ref;
      const imageAltText = props.node.altText;
      const fluidProps = getFluidGatsbyImage(
        imageAssetId,
        { maxWidth: 1200, maxHeight: 680, quality: 90, jpegProgressive: true },
        sanityConfig
      );
      return <BlogImage altText={imageAltText} image={fluidProps} />;
    },
    formTip: props => {
      const type = props.node._type;
      const headline = props.node.headline;
      const tipBody = props.node.content;
      return <BlogTipCard type={type} headline={headline} tipBody={tipBody} />;
    },
    intensityTip: props => {
      const type = props.node._type;
      const headline = props.node.headline;
      const tipBody = props.node.content;
      return <BlogTipCard type={type} headline={headline} tipBody={tipBody} />;
    },
    nutritionTip: props => {
      const type = props.node._type;
      const headline = props.node.headline;
      const tipBody = props.node.content;
      return <BlogTipCard type={type} headline={headline} tipBody={tipBody} />;
    },
  },
};
