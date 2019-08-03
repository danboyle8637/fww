import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";

import Global from "../styles/Global";
import { above, darkTheme } from "../styles/Theme";
import WebsiteLayout from "./Layouts/WebsiteLayout";
import BlogLayout from "./Layouts/BlogLayout";
import AppLayout from "./Layouts/AppLayout";
import { ScreenWidthStore } from "../context/ScreenWidthContext";
import { MenuStore } from "../context/MenuContext";
import { menuState, menuReducer } from "../reducers/menuReducer";
import Header from "./header";
import FooterSection from "../components/Website/Footer/FooterSection";
//import PageTransition from "../Animations/ReactTransitions/PageTransition";

const Layout = ({ children, location }) => {
  const [siteLayout, setSiteLayout] = useState("website");

  useEffect(() => {
    const pathName = location.pathname;

    if (pathName.includes("blog")) {
      setSiteLayout("blog");
    } else if (pathName.match(/^\/app/)) {
      console.log("You're in the app part now!");
      setSiteLayout("app");
    } else {
      setSiteLayout("website");
    }
  }, [location.pathName]);

  return (
    <ThemeProvider theme={darkTheme}>
      <MenuStore initialState={menuState} reducer={menuReducer}>
        <ScreenWidthStore>
          <Global />
          <Header location={location} />
          {siteLayout === "blog" ? (
            <BlogLayout>{children}</BlogLayout>
          ) : siteLayout === "app" ? (
            <AppLayout>{children}</AppLayout>
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
