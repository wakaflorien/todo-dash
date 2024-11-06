import React from "react";

export const SecondaryButton = (props) => {
  return (
    <button
      className={`flex items-center gap-2 w-[150px] lg:w-fit h-8 border text-xs text-primary cursor-pointer rounded-md p-2 md:p-4 md:text-sm ${
        props.currentTheme === "light"
          ? "bg-content-bg border-secondary text-secondary"
          : "bg-primary/20 text-white cursor-pointer border-none"
      }`}
      onClick={props.onClick}
    >
      {props.icon}
      {props.text}
    </button>
  );
};
