import React from "react";
import ProjectSummary from "./ProjectSummary";
import { EllipsisVerticalIcon, MicrophoneIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";
import Message from "./Message";
import Reply from "./Reply";

function RightSidePanel(props) {
  return (
    <div className={`${props.currentTheme === "light" ? "bg-white border-l" : "bg-night border-l border-night"} w-[300px] h-content sm:h-screen  shadow-sm p-4 space-y-4 absolute right-0 z-50 hidden md:block`}>
      {/* Right sidebar panel */}
      <div className="flex flex-col gap-4">
        <header className="flex justify-between gap-4 capitalize text-sm">
          <span className="text-primary">project overview</span>
          <span className="text-secondary cursor-pointer">see all</span>
        </header>

        <ProjectSummary currentTheme={props.currentTheme} />

        <div className={`${props.currentTheme === "light" ? "bg-white" : "bg-primary/20"} relative space-y-4 rounded-md`}>
          <header className="bg-white w-full sticky top-0 flex justify-between p-4 capitalize text-sm shadow-sm rounded-t-md">
            <div className="space-x-2">
              <span className="text-primary">teamChat</span>
              <small className="text-secondary">24 april 2023</small>
            </div>
            <EllipsisVerticalIcon className="nav-icon" />
          </header>

          <div className="space-y-4 h-[400px] overflow-scroll scroll-smooth scrollbar-hide">
            <Message hasInfo={false} messageType="message" />
            <Reply hasInfo={false} messageType="message" />
            <Message hasInfo={true} messageType="recording" />
            <Reply hasInfo={false} messageType="recording" />
            <Message hasInfo={false} messageType="message" />
            <Reply hasInfo={true} messageType="message" />
            <Message hasInfo={false} messageType="message" />
            <Reply hasInfo={true} messageType="message" />
          </div>

          <div className="flex items-center gap-2 bg-content-bg rounded-md">
            <input
              type="text"
              className="w-full bg-inherit focus:outline-none focus:ring-none rounded-md p-2 "
              placeholder="Type a message ..."
            />
            <div className="flex px-2 gap-2 divide-x divide-solid">
              <MicrophoneIcon className="nav-icon" />
              <PaperAirplaneIcon className="nav-icon !text-tertiary -rotate-45" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightSidePanel;
