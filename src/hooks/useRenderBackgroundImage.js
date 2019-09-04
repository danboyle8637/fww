import { useContext, useEffect, useState } from "react";

import ScreenWidthContent from "../context/ScreenWidthContext";

const useRenderBackgroundImage = (
  mobileBackground,
  tabletBackground,
  ipadProBackground,
  desktopBackground
) => {
  const device = useContext(ScreenWidthContent);
  const [background, setBackground] = useState({});

  const mobile = mobileBackground.childImageSharp.fluid;
  const tablet = tabletBackground.childImageSharp.fluid;
  const ipadPro = ipadProBackground.childImageSharp.fluid;
  const laptop = desktopBackground.childImageSharp.fluid;

  useEffect(() => {
    if (device === "mobile") {
      setBackground(mobile);
    }

    if (device === "tablet") {
      setBackground(tablet);
    }

    if (device === "ipadPro") {
      setBackground(ipadPro);
    }

    if (device === "laptop" || device === "ultraWide") {
      setBackground(laptop);
    }
  }, [device, mobile, tablet, ipadPro, laptop]);

  return background;
};

export default useRenderBackgroundImage;
