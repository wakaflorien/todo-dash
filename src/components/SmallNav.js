import {
  AcademicCapIcon,
  BellIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { useTranslation } from "react-i18next";
import UserGroupBlend from "./UserGroupBlend";
import ThemeSwitcher from "./ThemeSwitcher";
import LanguageSwitcher from "./LanguageSwitcher";
import Notification from "./Notification";

function SmallNav(props) {
  const { t } = useTranslation();
  return (
    <div
      className={`${
        props.showSmallNav ? "block" : "hidden"
      } block md:hidden absolute w-2/3 h-screen bg-slate-800 z-50 top-0 left-0`}
    >
      <div className="flex justify-between p-4">
        <AcademicCapIcon className="nav-icon" />
        <XMarkIcon className="nav-icon" onClick={props.closeSmallNav} />
      </div>
      <div className="flex flex-col  items-start p-4 space-y-8">
        <div className="flex flex-col space-y-4">
          {props.breadCrumbsItems &&
            props.breadCrumbsItems.map((item) => (
              <div key={item.id} className="flex items-center gap-4">
                <p
                  className={`capitalize cursor-pointer text-xs md:text-sm ${
                    item.active
                      ? "text-white hover:text-secondary"
                      : "text-secondary hover:text-primary"
                  }`}
                >
                  {item.name}
                </p>
              </div>
            ))}
          <div className="flex items-center space-x-2">
            <BellIcon className="nav-icon" />
            <span className="text-xs text-white">Notification</span>
          </div>
        </div>
        <div className="flex flex-col space-y-4  ">
          <ThemeSwitcher
            currentTheme={props.currentTheme}
            setCurrentTheme={props.setCurrentTheme}
            smallNav={true}
          />

          <LanguageSwitcher currentTheme={props.currentTheme} />
        </div>
      </div>
    </div>
  );
}

export default SmallNav;
