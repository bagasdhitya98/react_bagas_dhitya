import React from "react";

import { UserIcon } from "@heroicons/react/24/solid";

const Navbar = ({ email }) => {
  return (
    <nav className="w-screen h-38 z-10 bg-white fixed shadow-sm sticky flex justify-end items-center px-4">
      <div className="flex gap-x-4 text-orange-600">
        <button className="hover:bg-orange-600 hover:text-white focus:outline-none bg-white border-none text-orange-500 rounded-md px-3 py-2">
          Contact Us
        </button>
        <button className="hover:bg-orange-600 hover:text-white focus:outline-none bg-white border-none text-orange-500 rounded-md px-3 py-2 mr-10">
          <UserIcon className="w-5 h-5 inline-block" />
          Hello, {email ? email : "You are not logged in"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
