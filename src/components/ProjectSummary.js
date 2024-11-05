import {
  CalendarDateRangeIcon,
  StarIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import React from "react";

import UserGroupBlend from "./UserGroupBlend";
import { useTranslation } from "react-i18next";

function ProjectSummary(props) {
  const { t } = useTranslation();
  return (
    <div
      className={`w-full ${
        props.currentTheme === "light" ? "bg-content-bg" : "bg-primary/20"
      } p-4 space-y-4 rounded-md`}
    >
      <div className="flex gap-4">
        <CalendarDateRangeIcon className="nav-icon" />
        <span className="text-xs text-secondary font-semibold capitalize">
          {t("overview.timeline")}
        </span>
        <span
          className={`text-xs capitalize ${
            props.currentTheme === "light" ? "text-primary" : "text-white"
          }`}
        >
          {" "}
          {t("months.april")} 23 - {t("months.may")} 7
        </span>
      </div>

      <div className="flex justify-start items-center gap-4">
        <div className="flex gap-4">
          <UserGroupIcon className="nav-icon" />
          <span className="text-xs text-secondary font-semibold capitalize">
            {t("overview.team")}
          </span>
        </div>

        <UserGroupBlend hasAdd={false} hasMore={false} />
      </div>

      <div className="flex gap-4">
        <StarIcon className="nav-icon" />
        <span className={`text-xs text-secondary font-semibold capitalize`}>
          {t("overview.status")}
        </span>
        <span
          className={`text-xs capitalize ${
            props.currentTheme === "light" ? "text-primary" : "text-white"
          }`}
        >
          {t("tabs.inprogress")}
        </span>
      </div>
    </div>
  );
}

export default ProjectSummary;
