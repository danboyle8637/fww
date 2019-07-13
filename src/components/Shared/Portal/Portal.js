import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Transition } from "react-transition-group";
import { TweenMax } from "gsap";

import { useMenuContext } from "../../../context/MenuContext";
import { sizes } from "../../../styles/Theme";

const menuPortalRoot =
  typeof document !== "undefined"
    ? document.getElementById("reusable_portal")
    : null;

const el =
  typeof document !== "undefined" ? document.createElement("div") : null;

const Portal = ({ children }) => {
  // eslint-disable-next-line
  const [menuState, dispatch] = useMenuContext();

  useEffect(() => {
    menuPortalRoot.appendChild(el);
    const screenWidth = window.innerWidth;
    const { mobile, tablet, laptop } = breakPoints;

    const calculateDrawerWidth = (width, leftPosition) => {
      return width - (width * parseInt(leftPosition)) / 100;
    };

    if (screenWidth <= mobile) {
      const rightPosition = 80;
      const leftPosition = 20;
      const drawerWidth = calculateDrawerWidth(screenWidth, leftPosition);

      dispatch({
        type: "setMenuWidth",
        positions: {
          rightPosition: rightPosition,
          leftPosition: leftPosition,
          menuWidth: drawerWidth,
        },
      });
    }

    if (screenWidth > mobile && screenWidth < laptop) {
      const rightPosition = 60;
      const leftPosition = 40;
      const drawerWidth = calculateDrawerWidth(screenWidth, leftPosition);

      dispatch({
        type: "setMenuWidth",
        positions: {
          rightPosition: rightPosition,
          leftPosition: leftPosition,
          menuWidth: drawerWidth,
        },
      });
    }

    if (screenWidth >= laptop) {
      const rightPosition = 70;
      const leftPosition = 30;
      const drawerWidth = calculateDrawerWidth(screenWidth, leftPosition);

      dispatch({
        type: "setMenuWidth",
        positions: {
          rightPosition: rightPosition,
          leftPosition: leftPosition,
          menuWidth: drawerWidth,
        },
      });
    }

    return () => {
      menuPortalRoot.removeChild(el);
    };
  }, []);

  // const drawer = (
  //   <Transition
  //     in={show}
  //     mountOnEnter={true}
  //     unmountOnExit={true}
  //     addEndListener={(node, done) => {
  //       if (show) {
  //         TweenMax.fromTo(
  //           node,
  //           0.5,
  //           {
  //             left: "100%",
  //             onComplete: done,
  //           },
  //           {
  //             left: `${leftPosition}%`,
  //             ease: Power4.easeInOut,
  //             onComplete: done,
  //           }
  //         );
  //       } else {
  //         TweenMax.to(node, 0.4, {
  //           left: "100%",
  //           ease: Power4.easeOut,
  //           onComplete: done,
  //         });
  //       }
  //     }}
  //   >
  //     <MenuDrawerContainer>{children}</MenuDrawerContainer>
  //   </Transition>
  // );

  if (el) {
    return ReactDOM.createPortal(children, el);
  } else {
    return null;
  }
};

export default Portal;
