import { useEffect, useState, useRef } from "react";

const useSVGObserver = ({
  root = null,
  rootMargin,
  threshold = 1,
  shouldUnobserve = false,
}) => {
  const [ratio, setRatio] = useState(0);
  //const [target, setTarget] = useState({});
  const [previousRatio, setPreviousRatio] = useState(0);
  const [runAnimation, setRunAnimation] = useState(false);
  const [svgNode, setSVGNode] = useState(null);

  const options = {
    root: root,
    rootMargin: rootMargin,
    threshold: threshold,
  };

  // Callback sets the intersection ratio so you can start
  // comparing it to it's previous value.
  const startAnimation = entries => {
    entries.forEach(singleEntry => {
      if (singleEntry.intersectionRatio === 0) {
        //console.log("Setting the entry in state.");
        //setTarget(singleEntry.target);
        setRatio(singleEntry.intersectionRatio);
      }

      if (singleEntry.isIntersecting) {
        //console.log("Node is intersecting, Update values!");
        setRatio(singleEntry.intersectionRatio);
      } else {
        setRatio(singleEntry.intersectionRatio);
      }
    });
  };

  const buildObserver =
    typeof window !== `undefined`
      ? new IntersectionObserver(startAnimation, options)
      : null;

  const observer = useRef(buildObserver);

  // This effect sets the observer when the node is passed in.
  useEffect(() => {
    const currentObserver = observer.current;

    if (svgNode) {
      currentObserver.observe(svgNode);
    }

    return () => {
      currentObserver.disconnect();
    };
  }, [svgNode, observer]);

  // When the callback runs the ratio is set and this effect runs to track
  // previous ratio vs new ratio and whether the node is on screen.
  useEffect(() => {
    setPreviousRatio(ratio);

    if (ratio > previousRatio) {
      //console.log("Icon is on screen");
      setRunAnimation(true);
      if (shouldUnobserve) {
        observer.current.unobserve(svgNode);
      }
    }

    if (ratio < previousRatio) {
      //console.log("Icon is off screen");
      setRunAnimation(false);
    }
  }, [ratio, previousRatio, svgNode, shouldUnobserve]);

  return [setSVGNode, runAnimation];
};

export default useSVGObserver;
