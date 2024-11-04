import {
  CalendarDateRangeIcon,
  StarIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import React from "react";

import UserGroupBlend from "./UserGroupBlend";

function ProjectSummary(props) {
  return (
    <div className={`w-full ${props.currentTheme === "light" ? "bg-content-bg" : "bg-primary/20"} p-4 space-y-4 rounded-md`}>
      <div className="flex gap-4">
        <CalendarDateRangeIcon className="nav-icon" />
        <span className="text-xs text-secondary capitalize"> timeline</span>
        <span className="text-xs text-primary"> April 23 - May 7</span>
      </div>

      <div className="flex justify-start items-center gap-4">
        <div className="flex gap-4">
          <UserGroupIcon className="nav-icon" />
          <span className="text-xs text-secondary capitalize"> team</span>
        </div>

        <UserGroupBlend hasAdd={false} hasMore={false} />
      </div>

      <div className="flex gap-4">
        <StarIcon className="nav-icon" />
        <span className="text-xs text-secondary capitalize"> status</span>
        <span className="text-xs text-primary capitalize"> in progress</span>
      </div>
    </div>
  );
}

export default ProjectSummary;
