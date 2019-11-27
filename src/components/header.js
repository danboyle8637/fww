import React, { useContext, useState, useEffect, useRef } from "react";
import { Link, navigate } from "gatsby";
import styled from "styled-components";
import { TweenMax, Power2 } from "gsap/TweenMax";

import { getRems } from "../utils/helpers";
import FWWLogo from "../svgs/FWWLogo";
import MenuChicklet from "./Shared/Nav/MenuChicklet";
import ScreenWidthContext from "../context/ScreenWidthContext";
import NavigationArrow from "../svgs/NavigationArrow";
import NavCTAButton from "../components/Buttons/NavCTAButton";
import { useMenuContext } from "../context/MenuContext";
import { above } from "../styles/Theme";

const Header = ({ location }) => {
  const device = useContext(ScreenWidthContext);
  const backButtonRef = useRef(null);
  const [showLogo, setShowLogo] = useState(true);
  const [showBackButton, setShowBackButton] = useState(false);
  // eslint-disable-next-line
  const [menuStore, dispatchMenuAction] = useMenuContext();

  useEffect(() => {
    return () => {
      TweenMax.killTweensOf(backButtonRef.current);
      backButtonRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (device === "mobile") {
      setShowLogo(false);
    }
  }, [device]);

  useEffect(() => {
    dispatchMenuAction({ type: "setPathName", value: location.pathname });

    if (location.pathname.includes("blog") && location.pathname.length > 5) {
      setShowBackButton(true);
    } else if (
      location.pathname.includes("workouts-for-busy-women") ||
      location.pathname.includes("beginner-workouts-to-advanced") ||
      location.pathname.includes("online-personal-training") ||
      location.pathname.includes("ignite-strength-for-beginners") ||
      location.pathname.includes("body-burn-challenges") ||
      location.pathname.includes("strong-kettlebell-training")
    ) {
      setShowBackButton(true);
    } else {
      setShowBackButton(false);
    }
  }, [location, dispatchMenuAction]);

  useEffect(() => {
    const backButton = backButtonRef.current;

    if (showBackButton) {
      TweenMax.fromTo(
        backButton,
        0.5,
        {
          x: -200,
        },
        {
          x: 0,
          rotation: 360,
          ease: Power2.easeOut,
          delay: 1,
        }
      );
    }
  }, [showBackButton]);

  const handleBackButtonClick = () => {
    if (location.pathname.includes("blog") && location.pathname.length > 5) {
      navigate("/blog");
    }

    if (location.pathname.includes("workouts-for-busy-women")) {
      navigate("/what-we-do");
    }

    if (location.pathname.includes("beginner-workouts-to-advanced")) {
      navigate("/workouts-for-busy-women");
    }

    if (location.pathname.includes("online-personal-training")) {
      navigate("/beginner-workouts-to-advanced");
    }

    if (
      location.pathname.includes("ignite-strength-for-beginners") ||
      location.pathname.includes("body-burn-challenges") ||
      location.pathname.includes("strong-kettlebell-training")
    ) {
      navigate("/programs");
    }
  };

  const handleCTAButtonClick = () => {
    navigate("/join-a-7-day-reset-program");
  };

  return (
    <HeaderBar maxWidth={getRems(1200)}>
      {showBackButton ? (
        <BackButtonBackground
          ref={backButtonRef}
          onClick={handleBackButtonClick}
        >
          <BackButton />
        </BackButtonBackground>
      ) : null}
      <LogoLink to={"/"}>
        <Logo showBackButton={showBackButton} showBackButton={showBackButton} />
      </LogoLink>
      <MenuWrapper>
        <NavCTAButton handleClick={handleCTAButtonClick}>
          Start for FREE!
        </NavCTAButton>
        <MenuChicklet />
      </MenuWrapper>
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
  display: ${props => (props.showBackButton ? "none" : "flex")};
  justify-content: center;
  align-items: center;
  width: 3rem;
  ${above.mobile`
    width: ${props => (props.showBackButton ? "3rem" : "4.5rem")};
  `}
  ${above.tablet`
    width: ${props => (props.showBackButton ? "3rem" : "5rem")};
  `};
`;

const BackButtonBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(16, 16, 16, 0.6);
  border-radius: 50%;
  width: 52px;
  height: 52px;
  align-self: center;
  cursor: pointer;
`;

const BackButton = styled(NavigationArrow)`
  width: 20px;
  transform: rotate(180deg);
`;

const LogoLink = styled(Link)`
  margin: 0;
  padding: 0;
  border-radius: 8px;
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #000, 0 0 0 4px ${props => props.theme.tertiaryAccent};
  }
`;

const MenuWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 20px;
  align-items: center;
  ${above.mobile`
    gap: 40px;
  `}
`;
