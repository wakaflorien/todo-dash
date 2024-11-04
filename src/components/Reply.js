import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import React from "react";
import Tooltip from "./Tooltip";

function Reply(props) {
  return (
    <div className="flex gap-2">
      <div className="rounded-md w-full">
        <div className={`flex gap-2 items-center justify-end`}>
          <p className="font-semibold text-sm/6">Allure Malika</p>
          <p className="text-secondary text-xs/3">
            <time>12:30</time>PM
          </p>
        </div>
        <div className="p-2 rounded-md bg-content-bg flex justify-between items-center">
          {props.messageType === "message" && (
            <p className={`text-xs truncate w-full `}>
              Thanks for the feedback! i will get back to you
            </p>
          )}
          {props.messageType === "recording" && (
            <p className={`text-xs  w-full `}>Thanks for the feedback</p>
          )}
          {props.hasInfo && (
            <Tooltip text="Report !" position="top">
              <ExclamationCircleIcon
                className={`nav-icon !text-tertiary cursor-pointer`}
              />
            </Tooltip>
          )}
        </div>
      </div>
      <div className="w-8 h-8 rounded-full">
        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="allure"
          className={`h-8 w-8 object-cover rounded-full cursor-pointer`}
        />
      </div>
    </div>
  );
}

export default Reply;
