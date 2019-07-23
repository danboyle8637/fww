/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

require("typeface-montserrat");
require("typeface-quicksand");
const React = require("react");
const MainLayout = require("./src/components/Layouts/MainLayout").default;

exports.wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <MainLayout {...props}>{element}</MainLayout>;
};
