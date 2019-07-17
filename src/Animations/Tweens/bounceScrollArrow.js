import { TweenMax, Power2 } from "gsap";

const bounceScrollArrow = (element, kill) => {
  if (kill === false) {
    TweenMax.fromTo(
      element,
      1,
      {
        y: -20,
      },
      {
        y: 20,
        ease: Power2.easeInOut,
        yoyo: true,
        repeat: -1,
      }
    );
  }

  if (kill === true) {
    TweenMax.killTweensOf(element);
  }
};

export default bounceScrollArrow;
