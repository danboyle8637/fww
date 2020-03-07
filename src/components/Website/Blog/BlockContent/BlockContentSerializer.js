import React from "react";
import { getFluidGatsbyImage } from "gatsby-source-sanity";

import PrimarySubhead from "./PrimarySubhead";
import SecondarySubhead from "./SecondarySubhead";
import ListSubhead from "./ListSubhead";
import BlogNormalText from "./BlogNormalText";
import BlogTipCard from "./BlogTipCard";
import UnorderedListItem from "./UnorderedListItem";
import OrderedListItem from "./OrderedListItem";
import BlogStrongText from "./BlogStrongText";
import BlogBlockQuote from "./BlogBlockQuote";
import ExternalLink from "./ExternalLink";
import InternalLink from "./InternalLink";
import BlogImage from "./BlogImage";
import Spacer from "./Spacer";

const sanityConfig = {
  projectId: process.env.SANITY_PROJECTID,
  dataset: process.env.SANITY_DATASET,
};

const serializers = {
  types: {
    block: props => {
      console.log("Block Props:", props);

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
        case "blockquote": {
          return <BlogBlockQuote>{props.children}</BlogBlockQuote>;
        }
        case "normal": {
          return <BlogNormalText>{props.children}</BlogNormalText>;
        }
        default: {
          return <BlogNormalText>{props.children}</BlogNormalText>;
        }
      }
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
    shamelessPlug: props => {
      const type = props.node._type;
      const headline = props.node.headline;
      const tipBody = props.node.content;
      return <BlogTipCard type={type} headline={headline} tipBody={tipBody} />;
    },
    spacer: props => {
      const space = props.node.space;
      return <Spacer space={space} />;
    },
  },
  listItem: props => {
    switch (props.node.listItem) {
      case "bullet": {
        return <UnorderedListItem>{props.children}</UnorderedListItem>;
      }
      case "number": {
        return <OrderedListItem>{props.children}</OrderedListItem>;
      }
      default: {
        return <UnorderedListItem>{props.children}</UnorderedListItem>;
      }
    }
  },
  marks: {
    strong: props => {
      return <BlogStrongText>{props.children}</BlogStrongText>;
    },
    externalLink: props => {
      console.log(props);
      const link = props.mark.href;
      return <ExternalLink link={link}>{props.children}</ExternalLink>;
    },
    internalLink: props => {
      const to = props.mark.href;
      return <InternalLink to={to}>{props.children}</InternalLink>;
    },
  },
};

export default serializers;
