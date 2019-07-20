import { TweenMax, Power2 } from "gsap/TweenMax";

const compassIconAni = (node, isIntersecting) => {
  const animation = TweenMax.to(node, 0.8, {
    transformOrigin: "50% 50%",
    rotation: 80,
    ease: Power2.easeOut,
    yoyo: true,
    yoyoEase: Power2.easeOut,
    repeat: 12,
  });

  if (isIntersecting) {
    animation.play(0);
  }

  if (!isIntersecting) {
    animation.kill(node);
    animation.progress(0);
  }
};

export default compassIconAni;
