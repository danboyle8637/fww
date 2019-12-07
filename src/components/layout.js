import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";

import Global from "../styles/Global";
import { darkTheme } from "../styles/Theme";
import WebsiteLayout from "./Layouts/WebsiteLayout";
import BlogLayout from "./Layouts/BlogLayout";
import { ScreenWidthStore } from "../context/ScreenWidthContext";
import { MenuStore } from "../context/MenuContext";
import { menuState, menuReducer } from "../reducers/menuReducer";
import Header from "./header";
import FooterSection from "../components/Website/Footer/FooterSection";

const Layout = ({ children, location }) => {
  const [siteLayout, setSiteLayout] = useState("website");

  useEffect(() => {
    if (typeof window !== undefined) {
      const pathName = location.pathname;

      if (pathName.includes("blog")) {
        setSiteLayout("blog");
      } else {
        setSiteLayout("website");
      }
    }
  }, [location]);

  return (
    <ThemeProvider theme={darkTheme}>
      <MenuStore initialState={menuState} reducer={menuReducer}>
        <ScreenWidthStore>
          <Global blog={siteLayout} />
          <Header location={location} />

          {siteLayout === "blog" ? (
            <BlogLayout>{children}</BlogLayout>
          ) : siteLayout === "website" ? (
            <WebsiteLayout>{children}</WebsiteLayout>
          ) : null}

          <FooterSection />
        </ScreenWidthStore>
      </MenuStore>
    </ThemeProvider>
  );
};

export default Layout;
