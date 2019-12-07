/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react";
import CustomLayout from "./wrapPageElement";

export const wrapPageElement = CustomLayout;

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <div key={"reusable_portal"} id={"reusable_portal"} />,
  ]);
};
