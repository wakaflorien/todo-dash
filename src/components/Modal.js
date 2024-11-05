import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { PrimaryButton, SecondaryButton } from "./buttons";

function Modal(props) {
  if (!props.isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={props.onClose}
      />

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div
          className={`relative w-full max-w-lg transform rounded-lg  p-6 shadow-xl transition-all ${
            props.currentTheme === "light" ? "bg-white " : "bg-slate-800 "
          }`}
        >
          {/* Header */}
          <div className="mb-4 flex items-center justify-between">
            <h2
              className={`text-lg md:text-xl font-semibold  ${
                props.currentTheme === "light"
                  ? "text-primary"
                  : "text-secondary"
              }`}
            >
              {props.title}
            </h2>
            <button
              onClick={props.onClose}
              className={`rounded-full p-1 hover:bg-content-bg ${
                props.currentTheme === "light"
                  ? "hover:bg-content-bg"
                  : "hover:bg-primary/20"
              }`}
            >
              <XMarkIcon className="nav-icon" />
            </button>
          </div>

          {/* Content */}
          <div className="mt-2">{props.children}</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
