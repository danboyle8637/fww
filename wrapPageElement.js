import React from "react";
import MainLayout from "./src/components/Layouts/MainLayout";

const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  return <MainLayout {...props}>{element}</MainLayout>;
};

export default wrapPageElement;
