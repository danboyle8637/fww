import { TweenMax, Power2 } from "gsap/TweenMax";

const compassIconAni = (node, isIntersecting) => {
  const animation = TweenMax.to(node, 0.8, {
    transformOrigin: "50% 50%",
    rotation: 80,
    ease: Power2.easeOut,
    yoyo: true,
    yoyoEase: Power2.easeOut,
  });

  if (isIntersecting) {
    console.log("Play compass animation");
    animation.repeat(8);
  } else {
    console.log("Pause compass animation");
    animation.pause();
    animation.time(0);
  }
};

export default compassIconAni;
