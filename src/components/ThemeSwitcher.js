import { SunIcon } from "@heroicons/react/16/solid";
import { MoonIcon } from "@heroicons/react/24/outline";
import React from "react";

function ThemeSwitcher(props) {
  const changeTheme = () => {
    if (props.currentTheme === "light") {
      props.setCurrentTheme("dark");
    } else {
      props.setCurrentTheme("light");
    }
  };
  return (
    <div>
      {props.smallNav ? (
        <>
          {props.currentTheme === "dark" ? (
            <div
              className={`flex items-center space-x-2 ${
                props.currentTheme === "light"
                  ? "bg-content-bg border text-secondary"
                  : "bg-primary/20 text-white"
              } p-2 rounded-md`}
              onClick={changeTheme}
            >
              <MoonIcon className="nav-icon" />
              {props.smallNav && (
                <p className="text-xs font-semibold">Dark mode</p>
              )}
            </div>
          ) : (
            <div
              className={`flex items-center space-x-2 ${
                props.currentTheme === "light"
                  ? "bg-content-bg border text-secondary"
                  : "bg-primary/20 text-white"
              } p-2 rounded-md`}
              onClick={changeTheme}
            >
              <SunIcon className="nav-icon" />
              {props.smallNav && (
                <p className="text-xs font-semibold">Light mode</p>
              )}
            </div>
          )}
        </>
      ) : (
        <button
          onClick={changeTheme}
          className={`p-2 rounded-md cursor-pointer ${
            props.currentTheme === "light"
              ? "bg-content-bg border text-secondary"
              : "bg-primary/20 text-white"
          }`}
        >
          {props.currentTheme === "dark" ? (
            <MoonIcon className="nav-icon" />
          ) : (
            <SunIcon className="nav-icon" />
          )}
        </button>
      )}
    </div>
  );
}

export default ThemeSwitcher;
