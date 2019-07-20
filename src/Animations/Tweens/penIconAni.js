import { TweenMax, Power2 } from "gsap/TweenMax";

const penIconAni = node => {
  TweenMax.to(node, 1, {
    transformOrigin: "0% 100%",
    x: 20,
    rotation: -10,
    yoyo: true,
    ease: Power2.easeInOut,
    repeat: 6,
  });
};

export default penIconAni;
