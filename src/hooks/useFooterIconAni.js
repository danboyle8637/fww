import { useEffect, useState } from "react";

import footerIconAni from "../Animations/Tweens/footerIconAni";

const useFooterIconAni = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [iconRef, setIconRef] = useState(null);
  const [pathRef, setPathRef] = useState(null);

  useEffect(() => {
    footerIconAni(iconRef, pathRef, isClicked, isClickedFalse, false);

    return () => {
      footerIconAni(iconRef, pathRef, isClicked, isClickedFalse, true);
    };
  }, [iconRef, pathRef]);

  const isClickedFalse = () => {
    setIsClicked(false);
  };

  const handleIconClicked = () => {
    setIsClicked(true);
  };

  return [setIconRef, setPathRef, handleIconClicked];
};

export default useFooterIconAni;
