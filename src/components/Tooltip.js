import React, { useState } from "react";

function Tooltip({ text, position = "top", children, className = "" }) {
  const [isVisible, setIsVisible] = useState(false);

  const positions = {
    top: "bottom-full -left-4 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  const arrows = {
    top: "bottom-0 right-1 -translate-x-1/2 translate-y-full border-t-gray-800",
    bottom:
      "top-0 left-1/2 -translate-x-1/2 -translate-y-full border-b-gray-800",
    left: "right-0 top-1/2 -translate-y-1/2 translate-x-full border-l-gray-800",
    right:
      "left-0 top-1/2 -translate-y-1/2 -translate-x-full border-r-gray-800",
  };

  return (
    <div
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      onFocus={() => setIsVisible(true)}
      onBlur={() => setIsVisible(false)}
    >
      {children}

      {isVisible && (
        <div
          className={`
                  absolute 
                  ${positions[position]}
                  px-3 
                  py-2 
                  bg-tertiary 
                  text-white 
                  text-sm 
                  rounded-lg 
                  shadow-lg 
                  whitespace-nowrap 
                  z-50
                  animate-fade-in
                `}
          role="tooltip"
        >
          {text}
          <div
            className={`
                    absolute 
                    ${arrows[position]}
                    border-4 
                    border-transparent 
                  `}
          />
        </div>
      )}
    </div>
  );
}

export default Tooltip;
