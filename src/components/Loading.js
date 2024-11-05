import { ArrowPathIcon } from "@heroicons/react/24/outline";
import React from "react";

function Loading() {
  return (
    <div className="flex justify-center items-center h-96">
      <ArrowPathIcon className="w-8 h-8 animate-spin" />
    </div>
  );
}

export default Loading;
