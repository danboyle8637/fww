import TimelineMax from "gsap/TimelineMax";
import { TweenMax, Power2 } from "gsap/TweenMax";

const textMessageAni = (textMessage, client, runAnimation, kill) => {
  const clientTl = new TimelineMax();
  const trainerTl = new TimelineMax();

  if (client) {
    TweenMax.set(textMessage, { x: -200, autoAlpha: 0 });
  } else {
    TweenMax.set(textMessage, { x: 200, autoAlpha: 0 });
  }

  if (client && runAnimation) {
    clientTl.to(textMessage, 1, { x: 0, ease: Power2.easeOut, autoAlpha: 1 });
  }

  if (client && !runAnimation) {
    clientTl.fromTo(
      textMessage,
      1,
      { x: 0, ease: Power2.easeOut, autoAlpha: 1 },
      { x: -200, ease: Power2.easeOut, autoAlpha: 0 }
    );
  }

  if (!client && runAnimation) {
    trainerTl.to(textMessage, 1, { x: 0, ease: Power2.easeOut, autoAlpha: 1 });
  }

  if (!client && !runAnimation) {
    clientTl.fromTo(
      textMessage,
      1,
      { x: 0, ease: Power2.easeOut, autoAlpha: 1 },
      { x: 200, ease: Power2.easeOut, autoAlpha: 0 }
    );
  }

  if (kill) {
    clientTl.clear(null, textMessage);
    trainerTl.kill(null, textMessage);
  }
};

export default textMessageAni;
