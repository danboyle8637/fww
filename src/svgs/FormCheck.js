import React, { useEffect, useRef } from "react";

import checkMarkAni from "../Animations/Tweens/checkMarkAni";

const FormCheck = ({ width, height, className }) => {
  const checkRef = useRef(null);

  useEffect(() => {
    checkMarkAni(checkRef.current);
  }, [checkRef.current]);

  return (
    <svg
      id="form-check"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      width={width}
      height={height}
      viewBox="0 0 163.92 126.59"
    >
      <path
        ref={checkRef}
        id="check"
        fill="none"
        stroke="#8b53f6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="33.07"
        d="M147.39 16.53l-93.53 93.53-37.33-37.32"
      />
    </svg>
  );
};

export default FormCheck;
