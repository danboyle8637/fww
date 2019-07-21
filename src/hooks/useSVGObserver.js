import { useEffect, useState } from "react";
import { TweenMax } from "gsap/TweenMax";

const useSVGObserver = ({
  root = null,
  rootMargin,
  threshold = 1,
  animation,
}) => {
  const [svgNode, setSVGNode] = useState(null);
  const [innerElement, setInnerElement] = useState(null);

  const options = {
    root: root,
    rootMargin: rootMargin,
    threshold: threshold,
  };

  const startAnimation = (entries, observer) => {
    entries.forEach(entry => {
      //console.log(entry.boundingClientRect.y);
      if (entry.isIntersecting && innerElement) {
        animation(innerElement, entry.isIntersecting);
      }

      if (entry.isIntersecting && !innerElement) {
        animation(svgNode);
      }

      if (!entry.isIntersecting && innerElement) {
        animation(innerElement, entry.isIntersecting);
      }
    });
  };

  const observer = new IntersectionObserver(startAnimation, options);

  useEffect(() => {
    if (svgNode) {
      observer.observe(svgNode);
    }

    return () => {
      observer.disconnect();
      TweenMax.killTweensOf(svgNode);
      TweenMax.killTweensOf(innerElement);
      console.log("Oberserver is not observing anymore.");
    };
  }, [svgNode, observer]);

  return [setSVGNode, setInnerElement];
};

export default useSVGObserver;
