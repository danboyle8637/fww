import { Power2 } from "gsap/TweenMax";
import TimelineMax from "gsap/TimelineMax";

const footerIconAni = (icon, iconPath, isClicked, isClickedFalse, kill) => {
  const tl = new TimelineMax({ paused: true });

  tl.to(icon, 0.3, {
    scale: 1.4,
    ease: Power2.easeOut,
  })
    .to(
      iconPath,
      0.3,
      {
        stroke: "#b44cff",
        strokeWidth: "20",
        ease: Power2.easeOut,
      },
      "-=0.2"
    )
    .to(
      iconPath,
      0.3,
      {
        stroke: "#5afdf2",
        strokeWidth: "12",
        ease: Power2.easeOut,
      },
      "-=0.2"
    )
    .to(
      icon,
      0.3,
      {
        scale: 1,
        ease: Power2.easeOut,
      },
      "-=0.2"
    );

  if (isClicked) {
    tl.play(0);
    tl.eventCallback(
      "onComplete",
      () => {
        //setIsClicked(false);
        isClickedFalse();
      },
      []
    );
  } else {
    tl.pause(0);
  }

  if (kill) {
    tl.kill(null, icon);
    tl.kill(null, iconPath);
  }
};

export default footerIconAni;
