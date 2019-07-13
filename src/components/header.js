import React, { useContext, useState, useEffect } from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import { getRems } from "../utils/helpers";
import FWWLogo from "../svgs/FWWLogo";
import MenuChicklet from "./Shared/Nav/MenuChicklet";
import ScreenWidthContext from "../context/ScreenWidthContext";
import { above } from "../styles/Theme";

const Header = () => {
  const device = useContext(ScreenWidthContext);
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    if (device === "mobile") {
      setShowLogo(false);
    }
  }, [device]);

  return (
    <HeaderBar maxWidth={getRems(1200)}>
      <Link to={"/"}>{showLogo ? <Logo /> : null}</Link>
      <MenuChicklet />
    </HeaderBar>
  );
};

export default Header;

const HeaderBar = styled.header`
  margin: 0;
  padding: 12px 20px;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: ${props => `${props.maxWidth}rem`};
  z-index: 9999;
`;

const Logo = styled(FWWLogo)`
  width: 4rem;
  ${above.mobile`
    width: 4.5rem;
  `}
  ${above.tablet`
    width: 5rem;
  `}
`;
