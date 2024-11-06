import React from "react";
import { useTranslation } from "react-i18next";
import ProjectSummary from "./ProjectSummary";
import {
  EllipsisVerticalIcon,
  MicrophoneIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";
import Message from "./Message";
import Reply from "./Reply";

function RightSidePanel(props) {
  const { t } = useTranslation();
  return (
    <div className={`${props.showRightPanel ? "block" : "hidden"}`}>
      <div
        className={`${
          props.currentTheme === "light"
            ? "bg-white border-l"
            : "bg-night border-l border-night"
        } w-full md:w-[300px] h-fit  shadow-sm p-4 space-y-4 absolute right-0 z-50 hidden md:block`}
      >
        {/* Right sidebar panel */}
        <div className="flex flex-col gap-4">
          <header className="flex justify-between gap-4 capitalize text-sm">
            <span className="text-primary">{t("overview.project")}</span>
            <span className="text-secondary cursor-pointer" onClick={props.closeAll}>
              {props.showRightPanel ? t("overview.closeall") : t("overview.seeall")}
            </span>
          </header>

          <ProjectSummary currentTheme={props.currentTheme} />

          <div
            className={`${
              props.currentTheme === "light" ? "bg-white" : "bg-primary/20"
            } relative space-y-4 rounded-md`}
          >
            <header className="bg-inherit w-full sticky top-0 flex justify-between p-4 capitalize text-sm shadow-sm rounded-t-md">
              <div className="space-x-2">
                <span
                  className={`${
                    props.currentTheme === "light"
                      ? "text-primary"
                      : "text-white"
                  }`}
                >
                  {t("overview.teamchat")}
                </span>
                <small className="text-secondary">
                  24 {t("months.april")} 2023
                </small>
              </div>
              <EllipsisVerticalIcon className="nav-icon" />
            </header>

            <div className="space-y-4 h-[400px] overflow-scroll scroll-smooth scrollbar-hide">
              {Array.from({ length: 3 }).map((_, index) => (
                <div key={index}>
                  <Message
                    hasInfo={false}
                    messageType="message"
                    currentTheme={props.currentTheme}
                  />
                  <Reply
                    hasInfo={true}
                    messageType="message"
                    currentTheme={props.currentTheme}
                  />
                </div>
              ))}
            </div>

            <div
              className={`flex items-center gap-2 bg-content-bg rounded-md ${
                props.currentTheme === "light"
                  ? "bg-content-bg "
                  : "bg-primary/20"
              }`}
            >
              <input
                type="text"
                className={`w-full bg-inherit focus:outline-none focus:ring-none rounded-md p-2 ${
                  props.currentTheme === "light"
                    ? "bg-inherit "
                    : "bg-transparent"
                }`}
                placeholder="Type a message ..."
              />
              <div className="flex px-2 gap-2">
                <MicrophoneIcon className="nav-icon" />
                <span
                  className={`w-0.5 h-4 ${
                    props.currentTheme === "light"
                      ? "bg-secondary "
                      : "bg-primary"
                  }`}
                />
                <PaperAirplaneIcon className="nav-icon !text-tertiary -rotate-45" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSidePanel;
