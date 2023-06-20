import { UserCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Search from "./Search";

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
      <div className="flex items-center space-x-3 px-3 md:px-0">
        <Search />
        <UserCircleIcon className="w-8 h-8 text-gray-400 " />
      </div>
    </header>
  );
}

export default Nav;
