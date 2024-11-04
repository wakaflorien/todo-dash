import React from "react";

export const SecondaryButton = (props) => {
  return (
    <button className="flex items-center gap-2 w-fit h-8 border text-xs text-primary cursor-pointer rounded-md p-2 md:text-sm" onClick={props.onClick}>
      {props.icon}
      {props.text}
    </button>
  );
};
export const PrimaryButton = (props) => {
  return (
    <button className="flex items-center gap-2 w-fit h-8 border text-xs bg-tertiary text-white cursor-pointer rounded-md p-2 md:text-sm" onClick={props.onClick}>
      {props.icon}
      {props.text}
    </button>
  );
};
