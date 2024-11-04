import { PlusCircleIcon } from "@heroicons/react/16/solid";
import React from "react";

const UserGroupBlend = (props) => {
  const users = [
    { id: 1, name: "Sarah Wilson", role: "Designer" },
    { id: 2, name: "Mike Johnson", role: "Developer" },
    { id: 3, name: "Emma Davis", role: "Manager" },
    { id: 4, name: "Alex Smith", role: "Engineer" },
  ];

  return (
    <div>
      <div className={`relative flex flex-wrap items-center cursor-pointer`}>
        {users.map((user, index) => (
          <div
            key={user.id}
            className={` relative ${
              index !== 0 ? "-ml-2" : ""
            } group transition-transform hover:translate-y-1 `}
          >
            <div className=" relative w-8 h-8 rounded-full overflow-hidden transition-all duration-300 cursor-pointer ">
              <div className=" w-full h-full bg-blend-overlay hover:bg-blend-color-dodge transition-all duration-300 flex items-center justify-center text-white font-medium">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                  alt="allure"
                  className={`h-8 w-8 object-cover rounded-full `}
                />
              </div>
            </div>
          </div>
        ))}
        {props.hasMore && (<button className=" w-8 h-8 rounded-full  bg-secondary transition-transform hover:translate-y-1 duration-300 -ml-2  text-white  flex items-center justify-center z-40">
            <span className="text-xs">+2</span>
          </button>)}
        {props.hasAdd && (
          <div className=" w-8 h-8 rounded-full ml-4 ">
            <PlusCircleIcon className={`solid-icon`} />
          </div>
        )}
      </div>
    </div>
  );
};

export default UserGroupBlend;
