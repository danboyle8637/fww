import React from "react";
import styled from "styled-components";

import Portal from "../Portal/Portal";

const MenuDrawer = ({ children }) => {
  return (
    <Portal>
      <Drawer>{children}</Drawer>
    </Portal>
  );
};

export default MenuDrawer;

const Drawer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  padding: 20px;
  overflow: hidden;
  z-index: 2;
`;
