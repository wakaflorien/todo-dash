import {
  ChatBubbleOvalLeftEllipsisIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import UserGroupBlend from "./UserGroupBlend";

function TaskCard(props) {
  return (
    <div className="rounded-lg bg-white p-4 my-4 break-inside">
      {props.hasImage && (
        <figure>
          <img
            src={props.image}
            alt="Task visual"
            className="w-full h-40 object-cover rounded-md"
          />
        </figure>
      )}
      <header className="flex justify-between">
        <p
          className={`${
            props.status === "in progress"
              ? "activeTask"
              : props.status === "completed"
              ? "completedTask"
              : "pendingTask"
          }`}
        >
          {props.status}
        </p>
        <EllipsisVerticalIcon className="nav-icon" />
      </header>
      <main className="space-y-4">
        <div>
          <p className="capitalize text-sm">{props.title}</p>
          <p className="capitalize text-secondary text-xs">{props.subTitle}</p>
        </div>
        <footer className="flex justify-between ">
          <UserGroupBlend hasMore={false} hasAdd={false} />
          <div className="flex gap-1 items-center">
            <ChatBubbleOvalLeftEllipsisIcon className="nav-icon" />
            <p>{props.commentsCount}</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default TaskCard;
