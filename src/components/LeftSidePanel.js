import React, { useState } from "react";
import {
  Cog6ToothIcon,
  UserIcon,
  PlusIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";
import { Icon } from "@iconify/react";

function LeftSidePanel(props) {
  const [active, setActive] = useState(1);
  const tabsItems = [
    {
      id: 1,
      code: "home",
      icon: <Icon icon="fluent:home-48-regular" className="nav-icon" />,
    },
    {
      id: 2,
      code: "mail",
      icon: <Icon icon="ion:mail-unread-outline" className="nav-icon" />,
    },
    {
      id: 3,
      code: "document",
      icon: <Icon icon="ci:file-document" className="nav-icon" />,
    },
    {
      id: 4,
      code: "folder",
      icon: <Icon icon="mage:folder-minus" className="nav-icon" />,
    },
    {
      id: 5,
      code: "chart",
      icon: <Icon icon="lets-icons:chart-pin-light" className="nav-icon" />,
    },
  ];
  return (
    <>
      <div className="space-y-11">
        <header className="flex cursor-pointer items-center justify-start ">
          <AcademicCapIcon className="nav-icon" />
        </header>
        <nav className="flex flex-col space-y-6 hover:cursor-pointer items-start">
          {tabsItems.map((item) => (
            <div
              key={item.id}
              className="relative"
              onMouseOver={() => setActive(item.id)}
            >
              {item.icon}
              {active === item.id && (
                <span
                  className={`absolute -top-1 -left-3.5 bg-tertiary h-6 w-1 rounded-r-md shadow-tertiary shadow-xl`}
                ></span>
              )}
            </div>
          ))}
        </nav>
        <hr
          className={` ${
            props.currentTheme === "light"
              ? "border-content-bg block"
              : "hidden"
          }`}
        />

        <div className="flex flex-col gap-4 hover:cursor-pointer" key={1}>
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="relative w-8 h-8 rounded-full cursor-pointer"
            >
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                alt="allure"
                className={`h-8 w-8 object-cover rounded-full cursor-pointer`}
              />
              <div className="absolute top-0 right-0 bg-green-500 w-2 h-2 rounded-full border border-white"></div>
            </div>
          ))}
          <div className="flex items-center justify-center">
            <PlusIcon className={`nav-icon-add`} />
          </div>
        </div>
      </div>

      <footer className="flex flex-col gap-6 hover:cursor-pointer">
        <Cog6ToothIcon className="nav-icon" />
        <UserIcon className="nav-icon" />
      </footer>
    </>
  );
}

export default LeftSidePanel;
