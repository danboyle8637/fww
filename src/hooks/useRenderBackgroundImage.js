import { useContext, useEffect, useState } from "react";

import ScreenWidthContent from "../context/ScreenWidthContext";

const useRenderBackgroundImage = (
  mobileBackground,
  tabletBackground,
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

    if (device === "laptop") {
      setBackground(desktopBackground.childImageSharp.fluid);
    }
  }, [device]);

  return background;
};

export default useRenderBackgroundImage;
