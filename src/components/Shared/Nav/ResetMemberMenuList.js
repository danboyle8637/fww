import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { TimelineMax, Back } from "gsap";

import { Header4 } from "../../../styles/Headlines";
import siteConfig from "../../../utils/siteConfig";
import { MenuContext } from "../../../context/MenuContext";
import { above } from "../../../styles/Theme";

class ResetMemberMenuList extends Component {
  static contextType = MenuContext;

  constructor(props) {
    super(props);

    this.menuItemArray = [];

    this.setMenuItemArray = element => {
      this.menuItemArray.push(element);
    };

    this.tl = new TimelineMax({ paused: true });
  }

  componentDidMount() {
    this.tl.staggerFromTo(
      this.menuItemArray,
      0.3,
      {
        x: -200,
        autoAlpha: 0,
        ease: Back.easeOut,
      },
      {
        x: 0,
        autoAlpha: 1,
        ease: Back.easeOut,
      },
      0.03
    );
  }

  componentDidUpdate() {
    // eslint-disable-next-line
    const [menuState, dispatch] = this.context;

    if (menuState.isOpen) {
      this.tl.play();
    } else {
      this.tl.reverse();
    }
  }

  render() {
    const menuItems = siteConfig.resetMemberMenu.map(item => {
      const id = item.id;
      const title = item.title;
      const path = item.path;

      return (
        <MenuItemWrapper ref={this.setMenuItemArray} key={id} to={path}>
          <Header4 upper mobileSmall tertiary>
            {title}
          </Header4>
        </MenuItemWrapper>
      );
    });

    return <>{menuItems}</>;
  }
}

export default ResetMemberMenuList;

const MenuItemWrapper = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  text-decoration: none;
  ${above.mobile`
    height: 75px;
  `}
`;
