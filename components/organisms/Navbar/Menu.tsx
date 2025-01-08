import React from "react";
import Link from "next/link";
import Image from "next/image";
import { VscHome, VscBookmark, VscBook } from "react-icons/vsc";


export default function Menu() {
  return (
    <>
      <li className="cursor-pointer duration-200 group lg:hover:bg-green-600 lg:hover:text-white lg:hover:border lg:hover:rounded-lg py-3 px-10 w-full rounded-lg Smb-3 ">
        <Link
          href={`/`}
          className=" flex gap-2 items-center cursor-pointer"
        >
          <VscHome size={23} className="group-hover:text-white text-green-600" />
          <label className="mt-1 font-fredoka">Home Page</label>
        </Link>
      </li>
      <li className="cursor-pointer duration-200 group lg:hover:bg-green-600 lg:hover:text-white lg:hover:border lg:hover:rounded-lg py-3 px-10 w-full rounded-lg Smb-3 ">
        <Link
          href={`/Menu`}
          className="flex gap-2 items-center cursor-pointer"
        >
          <VscBook size={23} className="group-hover:text-white text-green-600" />
          <label className="mt-1 font-fredoka">Menu</label>
        </Link>
      </li>
      <li className="cursor-pointer duration-200 group lg:hover:bg-green-600 lg:hover:text-white lg:hover:border lg:hover:rounded-lg py-3 px-10 w-full rounded-lg Smb-3 ">
        <Link
          href={``}
          className="flex gap-2 items-center cursor-pointer"
        >
          <VscBookmark size={23} className="group-hover:text-white text-green-600" />
          <label className="mt-1 font-fredoka">My Orders</label>
        </Link>
      </li>
      
    </>
  );
}
