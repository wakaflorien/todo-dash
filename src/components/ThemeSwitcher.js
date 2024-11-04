import { SunIcon } from "@heroicons/react/16/solid";
import { MoonIcon } from "@heroicons/react/24/outline";
import React from "react";

function ThemeSwitcher(props) {
  return (
    <div>
      <button
        onClick={() =>
          props.currentTheme === "light"
            ? props.setCurrentTheme("dark")
            : props.setCurrentTheme("light")
        }
        className={`p-2 rounded-md ${
          props.currentTheme === "light"
            ? "bg-content-bg border text-secondary"
            : "bg-primary/20 text-white cursor-pointer"
        }`}
      >
        {props.currentTheme === "dark" ? (
          <MoonIcon className="nav-icon" />
        ) : (
          <SunIcon className="nav-icon" />
        )}
      </button>
    </div>
  );
}

export default ThemeSwitcher;
