import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { TweenMax, Power2 } from "gsap/TweenMax";
import TimelineMax from "gsap/TimelineMax";

import Slide1 from "./NutritionSlider/Slide1";
import Slide2 from "./NutritionSlider/Slide2";
import Slide3 from "./NutritionSlider/Slide3";
import Slide4 from "./NutritionSlider/Slide4";
import SliderButtons from "./NutritionSlider/SliderButtons";

const Section5 = () => {
  const [disableNext, setDisableNext] = useState(false);
  const [disablePrev, setDisablePrev] = useState(true);
  const [currentRecipe, setCurrentRecipe] = useState(0);
  const [recipes, setRecipes] = useState([]);
  const slide0Ref = useRef(null);
  const slide1Ref = useRef(null);
  const slide2Ref = useRef(null);
  const slide3Ref = useRef(null);
  const nextTlRef = useRef(new TimelineMax());
  const prevTlRef = useRef(new TimelineMax());

  useEffect(() => {
    const slide0 = slide0Ref.current;
    const slide1 = slide1Ref.current;
    const slide2 = slide2Ref.current;
    const slide3 = slide3Ref.current;

    setRecipes([slide0, slide1, slide2, slide3]);

    TweenMax.set([slide1, slide2, slide3], { x: "100%" });
  }, []);

  useEffect(() => {
    if (currentRecipe === 3) {
      setDisableNext(true);
    }

    if (currentRecipe === 0) {
      setDisablePrev(true);
    }
  }, [currentRecipe]);

  const handleSlide = action => {
    const nextTl = nextTlRef.current;
    const prevTl = prevTlRef.current;

    if (action === "next" && currentRecipe < 3) {
      nextTl
        .to(recipes[currentRecipe], 1, { x: "-100%", ease: Power2.easeOut })
        .to(
          recipes[currentRecipe + 1],
          1,
          { x: "0%", ease: Power2.easeOut },
          "-=1"
        );
      setCurrentRecipe(c => c + 1);
      setDisablePrev(false);
      return;
    }

    if (action === "prev" && currentRecipe > 0) {
      prevTl
        .to(recipes[currentRecipe], 1, { x: "100%", ease: Power2.easeOut })
        .to(
          recipes[currentRecipe - 1],
          1,
          { x: "0%", ease: Power2.easeOut },
          "-=1"
        );
      setCurrentRecipe(c => c - 1);
      setDisableNext(false);
      return;
    }
  };

  console.log(`Current Recipe: ${currentRecipe}`);
  console.log(`Disable Previous Button: ${disablePrev}`);
  console.log(`Disable Next Button: ${disableNext}`);

  return (
    <SliderContainer>
      <Slide1 ref={slide0Ref} />
      <Slide2 ref={slide1Ref} />
      <Slide3 ref={slide2Ref} />
      <Slide4 ref={slide3Ref} />
      <SliderButtons
        handleSlide={handleSlide}
        disablePrev={disablePrev}
        disableNext={disableNext}
      />
    </SliderContainer>
  );
};

export default Section5;

const SliderContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  overflow: hidden;
`;
