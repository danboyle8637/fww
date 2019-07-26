import { TweenMax } from "gsap/TweenMax";
import drawSVG from "../../greensock/DrawSVGPlugin";

const checkMarkAni = (checkmark, runAnimation, kill) => {
  // eslint-disable-next-line
  const useDrawSVG = drawSVG;

  TweenMax.set(checkmark, { drawSVG: "100% 100%" });

  if (runAnimation) {
    TweenMax.fromTo(
      checkmark,
      0.5,
      {
        drawSVG: "100% 100%",
      },
      {
        drawSVG: "100% 0%",
      }
    );
  }

  if (kill) {
    TweenMax.killTweensOf(checkmark);
  }
};

export default checkMarkAni;
