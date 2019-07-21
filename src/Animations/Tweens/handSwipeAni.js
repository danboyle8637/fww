import { TimelineMax } from "gsap/TimelineMax";
import { TweenMax } from "gsap/TweenMax";

const handSwipeAni = (handElement, pressElement) => {
  const tl = new TimelineMax({ repeat: -1 });

  TweenMax.set(handElement, {
    transformOrigin: "50% 100%",
    rotation: 30,
  });

  TweenMax.set(pressElement, {
    transformOrigin: "50% 50%",
    autoAlpha: 0,
    scale: 0,
  });

  tl.to(pressElement, 0.5, {
    autoAlpha: 1,
    scale: 1,
  })
    .to(handElement, 0.5, {
      rotation: -30,
    })
    .to(pressElement, 0.5, {
      autoAlpha: 0,
      scale: 0,
    })
    .to(handElement, 0.5, {
      rotation: 30,
    });
};

export default handSwipeAni;
