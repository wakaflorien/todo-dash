import { BellIcon } from "@heroicons/react/24/outline";
import React from "react";

function Notification(props) {
  return (
    <div>
      <button
        onClick={() => console.log("Notify")}
        className={`relative p-2 rounded-md ${
          props.currentTheme === "light"
            ? "bg-content-bg border text-secondary"
            : "bg-primary/20 text-white cursor-pointer"
        }`}
      >
        <BellIcon className="nav-icon" />
        <div className="absolute top-2 right-2 bg-red-500 w-2 h-2 rounded-full border border-white"></div>
      </button>
    </div>
  );
}

export default Notification;
