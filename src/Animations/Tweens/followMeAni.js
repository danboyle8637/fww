import TimelineMax from "gsap/TimelineMax";
import { TweenMax, Power2 } from "gsap/TweenMax";

const followMeAni = (socialIcon, socialName, runAnimation, kill) => {
  const tl = new TimelineMax();

  if (runAnimation) {
    TweenMax.set(socialName, {
      transformOrigin: "50% 50%",
      scale: 0,
      autoAlpha: 0,
    });
    TweenMax.set(socialIcon, {
      transformOrigin: "50% 50%",
      scale: 0.8,
      rotation: -20,
      x: -200,
      y: -60,
    });

    tl.to(socialIcon, 1, {
      scale: 1,
      rotation: 0,
      x: 0,
      y: 0,
      ease: Power2.easeOut,
    })
      .to(
        socialIcon,
        1,
        {
          scale: 3,
          autoAlpha: 0,
          ease: Power2.easeOut,
        },
        "-=0.5"
      )
      .to(
        socialName,
        1,
        {
          scale: 1,
          autoAlpha: 1,
          ease: Power2.easeOut,
        },
        "-=0.6"
      );
  } else {
    TweenMax.set(socialName, {
      transformOrigin: "50% 50%",
      scale: 1,
      autoAlpha: 1,
    });
    TweenMax.set(socialIcon, {
      transformOrigin: "50% 50%",
      scale: 2,
      rotation: 0,
      autoAlpha: 0,
      x: 0,
      y: 0,
    });

    tl.to(socialName, 1, {
      scale: 0,
      autoAlpha: 0,
      ease: Power2.easeOut,
    })
      .to(
        socialIcon,
        1,
        {
          scale: 1,
          autoAlpha: 1,
          ease: Power2.easeOut,
        },
        "-=0.5"
      )
      .to(
        socialIcon,
        1,
        {
          scale: 0.8,
          rotation: -20,
          x: -200,
          y: -60,
          ease: Power2.easeOut,
        },
        "-=0.5"
      );
  }

  if (kill) {
    tl.kill(null, socialIcon);
    tl.kill(null, socialName);
  }
};

export default followMeAni;
