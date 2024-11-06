import React from "react";
import {
  EnvelopeIcon,
  HomeIcon,
  DocumentChartBarIcon,
  FolderIcon,
  ChartBarSquareIcon,
  Cog6ToothIcon,
  UserIcon,
  PlusIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/outline";

function LeftSidePanel(props) {
  return (
    <>
      <div className="space-y-11">
        <header><AcademicCapIcon className="nav-icon" /></header>
        <nav className="flex flex-col gap-6 hover:cursor-pointer items-center">
          <HomeIcon className="nav-icon" />
          <EnvelopeIcon className="nav-icon" />
          <DocumentChartBarIcon className="nav-icon" />
          <FolderIcon className="nav-icon" />
          <ChartBarSquareIcon className="nav-icon" />
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
          <div className=" w-8 h-8 rounded-full ">
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
