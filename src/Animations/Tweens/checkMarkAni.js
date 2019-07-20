import { TweenMax } from "gsap/TweenMax";
import drawSVG from "../../greensock/DrawSVGPlugin";

const checkMarkAni = node => {
  // eslint-disable-next-line
  const useDrawSVG = drawSVG;

  TweenMax.set(node, { drawSVG: "100% 100%" });
  TweenMax.to(node, 0.3, {
    drawSVG: "0% 100%",
    delay: 3,
    onComplete: () => TweenMax.killTweensOf(node),
  });
};

export default checkMarkAni;
