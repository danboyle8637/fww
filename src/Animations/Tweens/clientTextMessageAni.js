import { TweenMax, Power2 } from "gsap/TweenMax";

const clientTextMessageAni = node => {
  TweenMax.from(node, 3, {
    x: -300,
    autoAlpha: 0,
    ease: Power2.easeInOut,
    delay: 2,
    onComplete: () => TweenMax.killTweensOf(node),
  });
};

export default clientTextMessageAni;
