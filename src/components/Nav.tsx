import React, { ReactNode } from "react";
import Image from "next/image";
import {
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

type Props = {};

function Nav() {
  return (
    <header className="flex flex-col md:flex-row items-center p-5 bg-gray-200/90 md:justify-between ">
      <Image
        src="/trello-logo-worldvectorlogo.svg"
        /*  src="https://links.papareact.com/c2cdd5" */
        alt="Trello logo"
        width={120}
        height={40}
        className="w-34 md:w-44 pb-3 md:pb-0 object-contain "
      />
      <div className="flex items-center space-x-3">
        <form className="flex items-center space-x-5 bg-gray-100 rounded-md p-2 shadow-md ">
          <MagnifyingGlassIcon className="w-6 h-6 text-gray-400 " />
          <input
            type="text"
            placeholder="Search"
            className="outline-none flex-1 py-1  bg-gray-100"
          />
        </form>
        <UserCircleIcon className="w-8 h-8 text-gray-400 " />
      </div>
    </header>
  );
}

export default Nav;
