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

  useEffect(() => {
    if (device === "mobile") {
      setBackground(mobileBackground.childImageSharp.fluid);
    }

    if (device === "tablet") {
      setBackground(tabletBackground.childImageSharp.fluid);
    }

    if (device === "ipadPro") {
      setBackground(ipadProBackground.childImageSharp.fluid);
    }

    if (device === "laptop" || device === "ultraWide") {
      setBackground(desktopBackground.childImageSharp.fluid);
    }
  }, [device]);

  return background;
};

export default useRenderBackgroundImage;
